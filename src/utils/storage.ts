import { Note, STORAGE_KEY, DEFAULT_NOTE_CONTENT, TocItem } from '@/types'

export function getNotes(): Note[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    // Create default note
    const defaultNote: Note = {
      id: generateId(),
      title: 'Welcome',
      content: DEFAULT_NOTE_CONTENT,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    const initialNotes = [defaultNote]
    saveNotes(initialNotes)
    return initialNotes
  } catch (error) {
    console.error('Failed to load notes:', error)
    return []
  }
}

export function saveNotes(notes: Note[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch (error) {
    console.error('Failed to save notes:', error)
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function extractTitle(content: string): string {
  const firstLine = content.trim().split('\n')[0]
  if (firstLine.startsWith('# ')) {
    return firstLine.slice(2).trim()
  }
  return firstLine || 'Untitled'
}

export function formatFileSize(content: string): string {
  const bytes = new Blob([content]).size
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export function formatRelativeTime(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return 'Just now'
  if (minutes < 60) return `${minutes} min ago`
  if (hours < 24) return `${hours} hours ago`
  if (days < 7) return `${days} days ago`
  return new Date(timestamp).toLocaleDateString()
}

export function exportMarkdown(note: Note): void {
  const blob = new Blob([note.content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${note.title.replace(/[^a-z0-9]/gi, '_') || 'note'}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function stripMarkdownFormatting(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/__/g, '')
    .replace(/_/g, '')
    .replace(/`/g, '')
    .trim()
}

export function generateSlug(text: string): string {
  return stripMarkdownFormatting(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function parseToc(content: string): TocItem[] {
  const toc: TocItem[] = []
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  let match
  
  const seenIds = new Set<string>()
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    let id = generateSlug(text)
    
    if (seenIds.has(id)) {
      let counter = 1
      while (seenIds.has(`${id}-${counter}`)) {
        counter++
      }
      id = `${id}-${counter}`
    }
    seenIds.add(id)
    
    toc.push({ level, text, id })
  }
  
  return toc
}

export function exportPDF(): void {
  window.print()
}