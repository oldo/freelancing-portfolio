import React from 'react';
import cx from 'classnames';
import {
  ImageSide,
  SetActiveView,
  SetImageSide,
  Views,
} from '../../interfaces';
import { toggleImageSide } from '../../lib/imageSide';
import { whiteDotGrid } from '../../styles/background-patterns';
import Head from '../Head';
import Face from './Face';
import Menu from './Menu';

interface LayoutProps {
  activeView: Views;
  setActiveView: SetActiveView;
  imageSide: ImageSide;
  setImageSide: SetImageSide;
}

const Layout: React.FC<LayoutProps> = ({
  imageSide,
  setImageSide,
  activeView,
  setActiveView,
  children,
}) => {
  const handleSetActiveView = (view: Views) => {
    setImageSide(toggleImageSide(imageSide));
    setActiveView(view);
  };

  const containerClasses = cx({
    ['ml-24 mr-auto']: imageSide === ImageSide.RIGHT,
    ['mr-4 ml-auto']: imageSide === ImageSide.LEFT,
    ['container mx-auto']: imageSide === ImageSide.NONE,
  });

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

        <Menu
          activeView={activeView}
          handleSetActiveView={handleSetActiveView}
          imageSide={imageSide}
        />
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
