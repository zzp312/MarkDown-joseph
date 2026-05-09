import { useNotes } from '@/hooks/useNotes'
import { Sidebar } from '@/components/Sidebar'
import { Editor } from '@/components/Editor'
import { Preview } from '@/components/Preview'
import { Header } from '@/components/Header'

function App() {
  const {
    notes,
    activeNote,
    activeNoteId,
    setActiveNoteId,
    createNote,
    importNoteFromFile,
    updateNote,
    deleteNote,
    searchQuery,
    setSearchQuery,
  } = useNotes()

  if (!activeNote) return null

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        notes={notes}
        activeNote={activeNote}
        activeNoteId={activeNoteId}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setActiveNoteId={setActiveNoteId}
        createNote={createNote}
        importNoteFromFile={importNoteFromFile}
        deleteNote={deleteNote}
      />
      <div className="flex-1 flex flex-col">
        <Header
          note={activeNote}
          onDelete={() => deleteNote(activeNoteId)}
        />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/2 border-r border-border">
            <Editor
              content={activeNote.content}
              onChange={(content) => updateNote(activeNoteId, content)}
            />
          </div>
          <div className="w-1/2 bg-panel-bg">
            <Preview content={activeNote.content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App