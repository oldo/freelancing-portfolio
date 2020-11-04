import React from 'react';
import NextHead from 'next/head';

import config from '../site.config';

interface HeadProps {
  title?: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <title>
        {title} | {config.title}
      </title>

      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link> */}

      {/* Fonts */}
      {config.fonts.map((font) => (
        <link key={font} href={font} rel="stylesheet" />
      ))}
    </NextHead>
  );
};

export default Head;
