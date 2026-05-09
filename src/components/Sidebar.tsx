import { useRef, useCallback } from 'react'
import { Note } from '@/types'
import { SearchBar } from './SearchBar'
import { NoteItem } from './NoteItem'
import { exportMarkdown } from '@/utils/storage'

interface SidebarProps {
  notes: Note[]
  activeNote: Note | undefined
  activeNoteId: string
  searchQuery: string
  setSearchQuery: (query: string) => void
  setActiveNoteId: (id: string) => void
  createNote: () => void
  importNoteFromFile: (content: string, fileName: string) => void
  deleteNote: (id: string) => void
}

export function Sidebar({
  notes,
  activeNote,
  activeNoteId,
  searchQuery,
  setSearchQuery,
  setActiveNoteId,
  createNote,
  importNoteFromFile,
  deleteNote,
}: SidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        importNoteFromFile(content, file.name)
      }
      reader.readAsText(file, 'utf-8')

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    },
    [importNoteFromFile]
  )

  const handleOpenFileClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])
  return (
    <div className="w-1/4 bg-sidebar-bg border-r border-border flex flex-col h-screen">
      <div className="p-4 border-b border-border">
        <h1 className="text-white text-xl font-bold mb-2">MARKDOWN NOTES</h1>
        <p className="text-gray-400 text-xs">你的笔记空间</p>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex-1 overflow-y-auto">
        {notes.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            <p>没有找到笔记</p>
          </div>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              isActive={note.id === activeNoteId}
              onClick={() => setActiveNoteId(note.id)}
              onDelete={() => deleteNote(note.id)}
            />
          ))
        )}
      </div>

      <div className="p-3 border-t border-border space-y-2">
        <button
          onClick={createNote}
          className="w-full py-3 bg-accent text-black font-semibold rounded hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          新建笔记
        </button>
        <button
          onClick={handleOpenFileClick}
          className="w-full py-3 bg-border text-white font-medium rounded hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          打开文件
        </button>
        <button
          onClick={() => activeNote && exportMarkdown(activeNote)}
          disabled={!activeNote}
          className="w-full py-3 bg-blue-900/50 text-blue-300 font-medium rounded hover:bg-blue-800/50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          保存文件
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".md"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  )
}