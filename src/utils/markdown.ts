import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";

/**
 * Strip all markdown formatting from a string, returning plain text.
 * Useful for frontmatter titles that contain markdown (e.g. **bold**) but
 * are rendered in a context where formatting isn't wanted (headings, <title>).
 */
export function stripMarkdown(markdown: string): string {
  return toString(fromMarkdown(markdown));
}
