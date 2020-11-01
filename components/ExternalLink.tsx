import React from 'react';

interface ExternalLinkProps {
  text: string;
  url: string;
  highlight?: boolean;
  classes?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  text,
  highlight,
  classes = '',
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} ${highlight ? 'text-blue-500' : ''}`}
    >
      {text}
    </a>
  );
};

export default ExternalLink;
