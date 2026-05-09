interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="p-3">
      <input
        type="text"
        placeholder="搜索笔记..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 bg-panel-bg text-white rounded border border-border focus:outline-none focus:border-accent"
      />
    </div>
  )
}