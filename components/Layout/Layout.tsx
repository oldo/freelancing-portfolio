import React from 'react';
import cx from 'classnames';
import { whiteDotGrid } from '../../styles/background-patterns';
import Menu from './Menu';
import Head from './Head';

interface LayoutProps {
  title: string;
  isMobile: boolean;
  isScreenHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  isMobile,
  isScreenHeight = false,
  children,
}) => {
  const containerClasses = cx({
    ['h-screen flex flex-col justify-center container mx-auto']: isScreenHeight,
    ['container mx-auto py-24 md:pt-32']: !isScreenHeight,
  });

  return (
    <>
      <Head title={title} />

      <div className="bg-pattern min-h-screen w-full overflow-hidden">
        <Menu isMobile={isMobile} />
        <div className={containerClasses}>{children}</div>
      </div>

      <style jsx>{`
        .bg-pattern {
          ${!isMobile ? whiteDotGrid() : ''}
        }
      `}</style>
    </>
  );
};

export default Layout;
