import React from 'react';
import { ImageSide } from '../../interfaces';
import { whiteDotGrid } from '../../styles/background-patterns';
import Head from '../Head';
import Face from './Face';
import Menu from './Menu';

interface LayoutProps {
  imageSide: ImageSide;
}

const Layout: React.FC<LayoutProps> = ({ imageSide, children }) => {
  let containerClasses = '';
  if (imageSide === ImageSide.RIGHT) containerClasses = 'ml-24 mr-auto';
  if (imageSide === ImageSide.LEFT) containerClasses = 'mr-4 ml-auto';
  if (imageSide === ImageSide.NONE) containerClasses = 'container mx-auto';

  return (
    <>
      <Head />

      <div className="relative bg-pattern flex flex-col justify-center h-screen w-full">
        <div
          className={containerClasses}
          style={{ width: imageSide !== ImageSide.NONE ? '70vw' : '' }}
        >
          {children}
        </div>

        <Face imageSide={imageSide} />
        <Menu imageSide={imageSide} />
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
