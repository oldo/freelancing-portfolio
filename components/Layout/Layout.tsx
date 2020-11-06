import React from 'react';
import { whiteDotGrid } from '../../styles/background-patterns';
import Menu from './Menu';
import Head from './Head';
import Face from './Face';
import { Views } from '../../interfaces';
import { useRouter } from 'next/router';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const showFace =
    router.pathname === Views.HOME || router.pathname === Views.ABOUT;

  return (
    <>
      <Head />

      <div className="bg-pattern min-h-screen w-full overflow-hidden">
        <Menu />
        {children}
      </div>

      {showFace && <Face />}

      <style jsx>{`
        .bg-pattern {
          ${whiteDotGrid()}
        }
      `}</style>
    </>
  );
};

export default Layout;
