import React from 'react';
import { whiteDotGrid } from '../../styles/background-patterns';
import Menu from './Menu';
import Head from './Head';
import Face from './Face';
import { ImageSide } from '../../interfaces';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head />

      <div className="bg-pattern min-h-screen w-full">
        <Menu />
        <div>{children}</div>
      </div>

      <Face imageSide={ImageSide.RIGHT} />

      <style jsx>{`
        .bg-pattern {
          ${whiteDotGrid()}
        }
      `}</style>
    </>
  );
};

export default Layout;
