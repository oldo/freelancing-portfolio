import React from 'react';
import NextHead from 'next/head';
import { NextSeo } from 'next-seo';

import config from '../../site.config';

interface HeadProps {
  title?: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
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
        <link rel="manifest" href="/site.webmanifest"></link>

        {/* Fonts */}
        {config.fonts.map((font) => (
          <link key={font} href={font} rel="stylesheet" />
        ))}
      </NextHead>

      <NextSeo
        title={title}
        titleTemplate={`%s | ${config.title}`}
        description={config.description}
        openGraph={{
          type: 'website',
          locale: 'en',
          images: [
            {
              url: `${config.url}/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: 'Ollie Nicholson',
            },
          ],
        }}
        twitter={{
          handle: '@oldo_nicho',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export default Head;
