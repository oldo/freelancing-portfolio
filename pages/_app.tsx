import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { AnimateSharedLayout } from 'framer-motion';

import MDXComponents from '../components/MDX';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <MDXProvider components={MDXComponents}>
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} key={router.pathname} />
      </AnimateSharedLayout>
    </MDXProvider>
  );
}

export default MyApp;
