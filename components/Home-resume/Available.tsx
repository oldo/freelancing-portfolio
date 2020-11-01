import React, { useState, useEffect } from 'react';

interface AvailableProps {}

const Available: React.FC<AvailableProps> = ({}) => {
  const CLASSES_1 = 'bg-green-500 duration-200';
  const CLASSES_2 = 'bg-green-200 duration-500';

  const [classes, setClasses] = useState(CLASSES_1);

  useEffect(() => {
    const timer = setInterval(
      () => setClasses(classes === CLASSES_1 ? CLASSES_2 : CLASSES_1),
      classes === CLASSES_1 ? 2000 : 500
    );

    return () => clearInterval(timer);
  });

  return (
    <div className="flex flex-row items-center">
      <div
        className={`${classes} transition-colors rounded-full lg:ml-4`}
        style={{ height: 15, width: 15 }}
      />
      <div className="pl-2 font-bold text-gray-600">AVAILABLE</div>
    </div>
  );
};

export default Available;
