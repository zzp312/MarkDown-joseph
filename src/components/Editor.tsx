import { useRef } from 'react'

interface EditorProps {
  content: string
  onChange: (content: string) => void
}

export function Editor({ content, onChange }: EditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  const getLineColumn = () => {
    if (!textareaRef.current) return { line: 1, column: 1 }
    const pos = textareaRef.current.selectionStart
    const text = textareaRef.current.value.substring(0, pos)
    const lines = text.split('\n')
    return {
      line: lines.length,
      column: lines[lines.length - 1].length + 1,
    }
  }

  const { line, column } = getLineColumn()

  return (
    <div className="flex flex-col h-full">
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleChange}
        className="flex-1 w-full bg-panel-bg text-white p-6 font-mono text-sm leading-relaxed resize-none focus:outline-none border-none"
        placeholder="Start writing..."
        spellCheck={false}
      />
      <div className="bg-panel-bg border-t border-border px-6 py-2 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-4">
          <span>行 {line}, 列 {column}</span>
          <span>UTF-8</span>
          <span>Markdown</span>
        </div>
      </div>
    </div>
  )
}