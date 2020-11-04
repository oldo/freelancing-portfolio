import React from 'react';
import ReactMarkdown, { Renderers } from 'react-markdown';

interface MarkdownProps {
  content: string;
  renderers?: Renderers;
}

const Markdown: React.FC<MarkdownProps> = ({ content, renderers = {} }) => {
  const r = {
    ...renderers,
  };
  return <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>;
};

export default Markdown;
