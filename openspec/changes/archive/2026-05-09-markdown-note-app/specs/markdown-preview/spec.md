## ADDED Requirements

### Requirement: Real-time Markdown preview
The system SHALL render Markdown content in real-time as the user types.

#### Scenario: Preview updates as user types
- **WHEN** user types in the content editor
- **THEN** preview panel updates automatically to show rendered Markdown

### Requirement: Three-column layout
The system SHALL implement a three-column layout: left sidebar (notes list), middle (editor), right (preview).

#### Scenario: Layout structure
- **WHEN** application loads
- **THEN** left sidebar shows notes list (25% width)
- **AND** middle panel shows Markdown editor (37.5% width)
- **AND** right panel shows rendered preview (37.5% width)

### Requirement: Support standard Markdown syntax
The system SHALL support standard Markdown syntax including headers, bold, italic, lists, links, and code blocks.

#### Scenario: Render headers
- **WHEN** user enters `# Heading 1` in editor
- **THEN** preview displays a level 1 heading

#### Scenario: Render bold and italic
- **WHEN** user enters `**bold**` and `*italic*`
- **THEN** preview displays bold and italic text accordingly

#### Scenario: Render unordered lists
- **WHEN** user enters `- item` or `* item`
- **THEN** preview displays bullet points

#### Scenario: Render ordered lists
- **WHEN** user enters `1. item`
- **THEN** preview displays numbered list

### Requirement: Code syntax highlighting
The system SHALL highlight code blocks with appropriate syntax coloring using react-syntax-highlighter.

#### Scenario: Highlight JavaScript code
- **WHEN** user enters JavaScript code with language identifier ```javascript
- **THEN** preview shows syntax-highlighted code with appropriate colors

#### Scenario: Highlight Python code
- **WHEN** user enters Python code with language identifier ```python
- **THEN** preview shows syntax-highlighted Python code

#### Scenario: Highlight Java code
- **WHEN** user enters Java code with language identifier ```java
- **THEN** preview shows syntax-highlighted Java code

#### Scenario: Highlight TypeScript code
- **WHEN** user enters TypeScript code with language identifier ```typescript
- **THEN** preview shows syntax-highlighted TypeScript code

### Requirement: Dark theme styling
The system SHALL use a dark theme with dark background and bright text colors.

#### Scenario: Dark theme colors
- **WHEN** application loads
- **THEN** sidebar has dark background (#1a1a1a)
- **AND** editor has dark background (#2d2d2d)
- **AND** preview has dark background (#2d2d2d)
- **AND** accent color is green (#00ff00) for headings and links

### Requirement: Preview status bar
The system SHALL display preview status information at the bottom of the preview panel.

#### Scenario: Show preview statistics
- **WHEN** preview is active
- **THEN** status bar shows word count and save status (e.g., "已保存")

### Requirement: Responsive preview layout
The system SHALL maintain proper formatting and readability in the preview panel regardless of content length.

#### Scenario: Long document scroll
- **WHEN** note content exceeds viewport height
- **THEN** preview panel shows scrollbar for navigation