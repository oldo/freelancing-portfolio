import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimateSharedLayout } from 'framer-motion';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <Component {...pageProps} key={router.pathname} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
