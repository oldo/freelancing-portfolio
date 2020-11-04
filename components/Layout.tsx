import React, { Fragment } from 'react';
import { ImageSide } from '../interfaces';
import ExternalLink from './ExternalLink';
import Head from './Head';
import Available from './Home-resume/Available';

interface LayoutProps {
  imageSide: ImageSide;
}

const Layout: React.FC<LayoutProps> = ({ imageSide, children }) => {
  return (
    <Fragment>
      <Head />
      <div>
        {/* <div className="fixed bg-white w-full" style={{ zIndex: 999 }}>
          <div className="px-4 lg:px-8 flex flex-row items-center h-12 justify-between">
            <Available />
  
            <ExternalLink
              url="mailto:oldo.nicho@gmail.com"
              text="GET IN CONTACT"
              classes="lg:mr-4 font-bold"
              highlight
            />
          </div>
        </div> */}
        <div className="w-full min-h-screen h-screen">{children}</div>
        {/* <div className="min-h-screen w-full px-4 py-12 lg:px-8">
          <div className="h-full bg-gray-200 rounded-lg">
            <div className="container px-8 pb-16 mx-auto">{children}</div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Layout;
