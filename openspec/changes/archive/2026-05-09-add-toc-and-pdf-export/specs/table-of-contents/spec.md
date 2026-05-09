## ADDED Requirements

### Requirement: Auto-generate table of contents
The system SHALL automatically generate a table of contents based on the Markdown headings (H1-H6) in the current note.

#### Scenario: Generate TOC from headings
- **WHEN** note content contains Markdown headings (lines starting with `#` to `######`)
- **THEN** system extracts all headings with their levels and text
- **AND** TOC is displayed as a floating navigation bar at the top of preview panel

### Requirement: Display TOC with hierarchy
The system SHALL display the table of contents with proper indentation to show heading hierarchy.

#### Scenario: Show heading levels
- **WHEN** TOC contains headings at different levels (e.g., H1, H2, H3)
- **THEN** H1 items have no indent
- **AND** H2 items are indented under their parent H1
- **AND** H3 items are indented further under their parent H2
- **AND** indentation uses visual markers (e.g., dashes or spacing)

### Requirement: Click to navigate
The system SHALL allow users to click on a TOC item to scroll to the corresponding heading in the preview.

#### Scenario: Navigate to heading
- **WHEN** user clicks on a TOC item
- **THEN** preview panel scrolls to bring the corresponding heading into view
- **AND** corresponding heading is highlighted briefly

### Requirement: TOC visibility
The system SHALL show the TOC only when the note contains at least one heading.

#### Scenario: Show/hide TOC based on content
- **WHEN** note content has no headings
- **THEN** TOC is hidden
- **WHEN** note content has at least one heading
- **THEN** TOC becomes visible

### Requirement: TOC update in real-time
The system SHALL update the TOC in real-time as the user types and changes headings.

#### Scenario: Update TOC on content change
- **WHEN** user adds, removes, or modifies a heading in the editor
- **THEN** TOC updates immediately to reflect the changes
