import { Note } from '@/types'
import { formatRelativeTime, formatFileSize } from '@/utils/storage'

interface NoteItemProps {
  note: Note
  isActive: boolean
  onClick: () => void
  onDelete: () => void
}

export function NoteItem({ note, isActive, onClick, onDelete }: NoteItemProps) {
  return (
    <div
      onClick={onClick}
      className={`p-3 cursor-pointer border-b border-border hover:bg-panel-bg transition-colors ${
        isActive ? 'bg-panel-bg border-l-4 border-l-accent' : ''
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium truncate">{note.title}</h3>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
            <span>{formatFileSize(note.content)}</span>
            <span>•</span>
            <span>{formatRelativeTime(note.updatedAt)}</span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="p-1 text-gray-500 hover:text-red-400 transition-colors"
          title="删除笔记"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}