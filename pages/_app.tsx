import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <Component {...pageProps} key={router.pathname} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
