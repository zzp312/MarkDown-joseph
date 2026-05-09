import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatFileSize, parseToc, generateSlug } from '@/utils/storage'
import { TableOfContents } from './TableOfContents'

interface PreviewProps {
  content: string
}

export function Preview({ content }: PreviewProps) {
  const toc = parseToc(content)

  return (
    <div className="flex flex-col h-full">
      <TableOfContents toc={toc} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="markdown-preview max-w-none">
          <ReactMarkdown
            components={{
              h1({ children }) {
                const text = String(children).replace(/<[^>]*>/g, '')
                return <h1 id={generateSlug(text)}>{children}</h1>
              },
              h2({ children }) {
                const text = String(children).replace(/<[^>]*>/g, '')
                return <h2 id={generateSlug(text)}>{children}</h2>
              },
              h3({ children }) {
                const text = String(children).replace(/<[^>]*>/g, '')
                return <h3 id={generateSlug(text)}>{children}</h3>
              },
              h4({ children }) {
                const text = String(children).replace(/<[^>]*>/g, '')
                return <h4 id={generateSlug(text)}>{children}</h4>
              },
              h5({ children }) {
                const text = String(children).replace(/<[^>]*>/g, '')
                return <h5 id={generateSlug(text)}>{children}</h5>
              },
              h6({ children }) {
                const text = String(children).replace(/<[^>]*>/g, '')
                return <h6 id={generateSlug(text)}>{children}</h6>
              },
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus as unknown as { [key: string]: React.CSSProperties }}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <div className="bg-panel-bg border-t border-border px-6 py-2 flex items-center justify-between text-xs text-gray-400">
        <span>{formatFileSize(content)}</span>
        <span>已保存</span>
      </div>
    </div>
  )
}