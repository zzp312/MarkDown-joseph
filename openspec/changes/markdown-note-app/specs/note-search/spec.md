## ADDED Requirements

### Requirement: Search notes by title
The system SHALL allow users to search notes by title.

#### Scenario: Search matching title
- **WHEN** user enters search term in search input
- **THEN** note list filters to show only notes with matching titles
- **AND** matching text is highlighted

#### Scenario: Clear search
- **WHEN** user clears search input
- **THEN** note list returns to full view

### Requirement: Search notes by content
The system SHALL allow users to search notes by content.

#### Scenario: Search matching content
- **WHEN** user enters search term in search input
- **THEN** note list filters to show notes with matching content
- **AND** matching notes are displayed with title only

### Requirement: Real-time search
The system SHALL update search results as the user types.

#### Scenario: Typing search query
- **WHEN** user types each character in search input
- **THEN** search results update immediately after each keystroke

### Requirement: No results handling
The system SHALL display appropriate message when no notes match the search query.

#### Scenario: No matches found
- **WHEN** search term matches no notes
- **THEN** system displays "No notes found" message