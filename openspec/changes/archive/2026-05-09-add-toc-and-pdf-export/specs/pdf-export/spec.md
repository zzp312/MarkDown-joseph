## ADDED Requirements

### Requirement: Export note as PDF
The system SHALL allow users to export the current note as a PDF file using the system print dialog.

#### Scenario: Export current note as PDF
- **WHEN** user clicks "Export PDF" button
- **THEN** system opens the system print dialog
- **AND** user can select "Save as PDF" as the destination
- **AND** the note content is rendered as formatted PDF

### Requirement: PDF export via Electron
The system SHALL use Electron's native print functionality to generate PDF files.

#### Scenario: Use system print dialog
- **WHEN** user initiates PDF export
- **THEN** Electron BrowserWindow.print() is called with appropriate options
- **AND** silent: false allows user to choose save location
- **AND** printBackground: true preserves styling

### Requirement: Export button accessibility
The system SHALL provide clear UI for PDF export, either as a separate button or as part of an export menu.

#### Scenario: Export button in header
- **WHEN** user is viewing a note
- **THEN** Export PDF button is visible in the header area
- **AND** button has appropriate icon and label

### Requirement: PDF formatting
The system SHALL render Markdown content in a readable format suitable for PDF export.

#### Scenario: Preserve formatting
- **WHEN** PDF is generated
- **THEN** headings use appropriate font sizes
- **AND** code blocks maintain syntax highlighting
- **AND** lists and links are properly formatted
