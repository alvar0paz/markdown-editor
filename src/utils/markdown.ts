import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export const parseMarkdown = (markdown: string): string => {
  const html = marked.parse(markdown);
  return typeof html === 'string' ? html : '';
};