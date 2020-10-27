import React, { useState, useEffect } from 'react';
import Available from './Home/Available';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const AVAILABILITY_COLOR_1 = 'bg-green-500';
  const AVAILABILITY_COLOR_2 = 'bg-green-200';

  const [availabilityColor, setAvailabilityColor] = useState(
    AVAILABILITY_COLOR_1
  );

  useEffect(() => {
    const timer = setInterval(
      () =>
        setAvailabilityColor(
          availabilityColor === AVAILABILITY_COLOR_1
            ? AVAILABILITY_COLOR_2
            : AVAILABILITY_COLOR_1
        ),
      availabilityColor === AVAILABILITY_COLOR_1 ? 2000 : 700
    );

    return () => clearInterval(timer);
  });

  return (
    <div>
      <div className="fixed bg-white w-full">
        <div className="px-8 flex flex-row items-center h-8 justify-between">
          <Available />

          <div className="mr-4 font-bold">
            <a
              href="mailto:oldo.nicho@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              GET IN CONTACT
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full p-8">
        <div className="h-full bg-gray-200">
          <div className="container px-8 pb-16 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
