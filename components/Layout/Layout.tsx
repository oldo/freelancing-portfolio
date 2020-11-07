import React from 'react';
import { whiteDotGrid } from '../../styles/background-patterns';
import Menu from './Menu';
import Head from './Head';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head />

      <div className="bg-pattern min-h-screen w-full overflow-hidden">
        <Menu />
        {children}
      </div>

      <style jsx>{`
        .bg-pattern {
          ${whiteDotGrid()}
        }
      `}</style>
    </>
  );
};

export default Layout;
