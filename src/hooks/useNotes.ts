import { useState, useEffect, useCallback } from 'react'
import { Note } from '@/types'
import { getNotes, saveNotes, generateId, extractTitle } from '@/utils/storage'

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [activeNoteId, setActiveNoteId] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = getNotes()
    setNotes(savedNotes)
    if (savedNotes.length > 0) {
      setActiveNoteId(savedNotes[0].id)
    }
  }, [])

  // Save notes to localStorage
  useEffect(() => {
    if (notes.length > 0) {
      saveNotes(notes)
    }
  }, [notes])

  const activeNote = notes.find(note => note.id === activeNoteId) || notes[0]

  const createNote = useCallback(() => {
    const newNote: Note = {
      id: generateId(),
      title: 'Untitled',
      content: '# Untitled\n\nStart writing...',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    const updatedNotes = [newNote, ...notes]
    setNotes(updatedNotes)
    setActiveNoteId(newNote.id)
  }, [notes])

  const importNoteFromFile = useCallback((content: string, fileName: string) => {
    const title = extractTitle(content) || fileName.replace(/\.md$/i, '') || 'Untitled'
    const newNote: Note = {
      id: generateId(),
      title,
      content,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    const updatedNotes = [newNote, ...notes]
    setNotes(updatedNotes)
    setActiveNoteId(newNote.id)
  }, [notes])

  const updateNote = useCallback(
    (id: string, content: string) => {
      const updatedNotes = notes.map(note => {
        if (note.id === id) {
          const title = extractTitle(content)
          return {
            ...note,
            title,
            content,
            updatedAt: Date.now(),
          }
        }
        return note
      })
      setNotes(updatedNotes)
    },
    [notes]
  )

  const deleteNote = useCallback(
    (id: string) => {
      if (!window.confirm('Are you sure you want to delete this note?')) return
      const updatedNotes = notes.filter(note => note.id !== id)
      setNotes(updatedNotes)
      if (activeNoteId === id && updatedNotes.length > 0) {
        setActiveNoteId(updatedNotes[0].id)
      }
    },
    [notes, activeNoteId]
  )

  const filteredNotes = searchQuery.trim()
    ? notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notes

  // Sort notes by updatedAt descending
  const sortedNotes = [...filteredNotes].sort(
    (a, b) => b.updatedAt - a.updatedAt
  )

  return {
    notes: sortedNotes,
    activeNote,
    activeNoteId,
    setActiveNoteId,
    createNote,
    importNoteFromFile,
    updateNote,
    deleteNote,
    searchQuery,
    setSearchQuery,
  }
}