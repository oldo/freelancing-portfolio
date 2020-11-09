import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { AnimateSharedLayout } from 'framer-motion';

import MDXComponents from '../components/MDX';
import '../styles/tailwind.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };

      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <MDXProvider components={MDXComponents}>
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} isMobile={isMobile} key={router.pathname} />
      </AnimateSharedLayout>
    </MDXProvider>
  );
}

export default MyApp;
