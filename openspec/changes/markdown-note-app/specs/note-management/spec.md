## ADDED Requirements

### Requirement: Create new note
The system SHALL allow users to create a new note with a title and content.

#### Scenario: Create empty note
- **WHEN** user clicks "New Note" button in sidebar
- **THEN** system creates a new note with default title "Untitled" and empty content
- **AND** new note becomes the active note in editor
- **AND** note is persisted to storage

### Requirement: Edit note title
The system SHALL allow users to edit the note title via the editor.

#### Scenario: Update title via editor
- **WHEN** user modifies the first line starting with `# ` in content editor
- **THEN** note title is extracted from the first heading
- **AND** update is persisted to storage

### Requirement: Edit note content
The system SHALL allow users to edit the note content in Markdown format using a large text area.

#### Scenario: Update content
- **WHEN** user types in the content editor
- **THEN** note content is updated in real-time
- **AND** update is persisted to storage

### Requirement: Delete note
The system SHALL allow users to delete a note.

#### Scenario: Delete selected note
- **WHEN** user clicks delete button in sidebar or top-right corner
- **THEN** system shows confirmation dialog
- **AND** user confirms deletion
- **THEN** note is removed from list and storage
- **AND** next available note becomes active

### Requirement: View note list
The system SHALL display a list of all notes in the left sidebar with title, size, and last modified time.

#### Scenario: Display notes
- **WHEN** application loads
- **THEN** system retrieves notes from storage
- **AND** displays notes in sidebar sorted by last modified time (newest first)
- **AND** each note shows title, size (KB), and relative time (e.g., "2 minutes ago")

### Requirement: Select note
The system SHALL allow users to select a note from the list to edit.

#### Scenario: Select note from list
- **WHEN** user clicks on a note in the sidebar list
- **THEN** selected note becomes active (highlighted)
- **AND** note content is displayed in editor
- **AND** preview is updated to show rendered content

### Requirement: Editor status bar
The system SHALL display editor status information at the bottom of the editor panel.

#### Scenario: Show status information
- **WHEN** editor is active
- **THEN** status bar shows line count, column count, encoding, and format (Markdown)

### Requirement: Export note as Markdown
The system SHALL allow users to export a note as a Markdown (.md) file.

#### Scenario: Export current note
- **WHEN** user clicks "Export MD" button
- **THEN** system downloads the note content as a .md file
- **AND** filename is based on the note title