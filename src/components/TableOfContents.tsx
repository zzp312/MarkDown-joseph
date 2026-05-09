import { useState } from 'react'
import { TocItem } from '@/types'

interface TableOfContentsProps {
  toc: TocItem[]
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      element.classList.add('heading-highlight')
      setTimeout(() => {
        element.classList.remove('heading-highlight')
      }, 1000)
    }
  }

  const getIndentClass = (level: number): string => {
    switch (level) {
      case 1:
        return 'pl-0'
      case 2:
        return 'pl-3'
      case 3:
        return 'pl-6'
      case 4:
        return 'pl-9'
      case 5:
        return 'pl-12'
      case 6:
        return 'pl-15'
      default:
        return 'pl-0'
    }
  }

  const getFontSizeClass = (level: number): string => {
    switch (level) {
      case 1:
        return 'text-sm font-semibold'
      case 2:
        return 'text-xs font-medium'
      default:
        return 'text-xs'
    }
  }

  if (toc.length === 0) {
    return null
  }

  return (
    <div className="sticky top-0 z-10 bg-panel-bg/95 backdrop-blur-sm border-b border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <span className="text-xs text-gray-400 font-medium">目录</span>
          <span className="text-xs text-gray-500">({toc.length})</span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isExpanded && (
        <nav className="px-6 pb-3 max-h-48 overflow-y-auto">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left py-1 ${getIndentClass(item.level)} ${getFontSizeClass(item.level)} text-gray-300 hover:text-accent transition-colors whitespace-nowrap`}
            >
              {item.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}