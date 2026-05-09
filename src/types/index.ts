export interface Note {
  id: string
  title: string
  content: string
  createdAt: number
  updatedAt: number
}

export interface TocItem {
  level: number
  text: string
  id: string
}

export const STORAGE_KEY = 'markdown-notes'

export const DEFAULT_NOTE_CONTENT = `# Welcome to Markdown Notes

This is your first note! You can edit this text and see the preview update in real-time.

## Features

- **Real-time preview** - See your Markdown rendered instantly
- **Code highlighting** - Supports JavaScript, TypeScript, Python, Java and more
- **Local storage** - Your notes are saved automatically
- **Search** - Find your notes quickly

## Example Code

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`)
}
\`\`\`

\`\`\`typescript
interface User {
  name: string
  age: number
}
\`\`\`

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")
\`\`\`

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

Enjoy writing! ✨
`