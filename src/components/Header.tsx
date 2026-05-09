import { Note } from '@/types'
import { exportMarkdown, exportPDF } from '@/utils/storage'

interface HeaderProps {
  note: Note
  onDelete: () => void
}

export function Header({ note, onDelete }: HeaderProps) {
  return (
    <div className="bg-panel-bg border-b border-border px-6 py-3 flex items-center justify-between">
      <h2 className="text-white font-medium truncate">{note.title}</h2>
      <div className="flex items-center gap-2">
        <button
          onClick={() => exportMarkdown(note)}
          className="px-3 py-1 bg-border text-white text-sm rounded hover:bg-gray-600 transition-colors"
        >
          导出 MD
        </button>
        <button
          onClick={exportPDF}
          className="px-3 py-1 bg-accent/20 text-accent text-sm rounded hover:bg-accent/30 transition-colors"
        >
          导出 PDF
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-900 text-red-200 text-sm rounded hover:bg-red-800 transition-colors"
        >
          删除
        </button>
      </div>
    </div>
  )
}