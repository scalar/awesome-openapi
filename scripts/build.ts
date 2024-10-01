import * as fs from 'node:fs'
import * as path from 'node:path'
import urls from '../data/openapi-document-urls.json'

interface OpenApiDocument {
  name: string
  url: string
}

function jsonToMarkdown(
  data: { url: string; name: string }[],
  mdFilePath: string,
): void {
  // Create markdown content

  let markdown = `# Awesome OpenAPI\n`
  markdown += `\n`
  markdown += `A list of awesome OpenAPI resources\n`
  markdown += `\n`
  markdown += `## Popular OpenAPI Documents`
  markdown += `\n`
  markdown += `| Name | URL |\n`
  markdown += `|------|-----|\n`
  data.forEach((item) => {
    markdown += `| ${item.name} | ${item.url} |\n`
  })

  // Write to markdown file
  fs.writeFileSync(mdFilePath, markdown)

  console.log(`✅ Markdown file created: ${mdFilePath}`)
  console.log()
}

// Usage
const outputPath = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  '..',
  'README.md',
)

jsonToMarkdown(urls, outputPath)
