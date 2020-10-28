import React from 'react';

interface SectionHeaderProps {
  title: string;
  subheading?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subheading }) => {
  return (
    <div className="mb-8">
      <div className="w-full border-b-2 border-gray-600">
        <div className="font-bold text-xl lg:text-2xl">{title}</div>
      </div>
      {subheading && (<div className="font-semibold text-gray-600">{subheading}</div>)}
    </div>
  );
};

export default SectionHeader;
