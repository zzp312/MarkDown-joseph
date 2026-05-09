## 1. Table of Contents (TOC) Implementation

- [x] 1.1 Create parseToc utility function to extract headings from Markdown content
- [x] 1.2 Define TocItem interface in types/index.ts
- [x] 1.3 Create TableOfContents component with floating navigation UI
- [x] 1.4 Implement heading click navigation using scrollIntoView
- [x] 1.5 Add heading ID generation for anchor links
- [x] 1.6 Integrate TOC into Preview component
- [x] 1.7 Style TOC with dark theme and proper indentation

## 2. PDF Export Implementation

- [x] 2.1 Configure Electron print permissions in main.js
- [x] 2.2 Create exportPDF function in utils/storage.ts
- [x] 2.3 Add print styles for better PDF output
- [x] 2.4 Add Export PDF button to Header component
- [x] 2.5 Implement print-to-PDF functionality using BrowserWindow.print()

## 3. Testing and Integration

- [x] 3.1 Test TOC with various heading structures (H1-H6)
- [x] 3.2 Test PDF export with complex Markdown content
- [x] 3.3 Test print dialog with "Save as PDF" option
- [x] 3.4 Verify dark theme styling in PDF output
