import React from 'react';
import ReactMarkdown from 'react-markdown';
import { whiteDotGrid } from '../../styles/background-patterns';

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = ({}) => {
  const description = `
Since getting my first computer at the age of 6 (a Commodore 64 with cassette tape data storage 🤘) I've always enjoyed using computers as a tool to get stuff done, but I transitioned into a fulltime career in software development **over 4 years ago** and since then I have been completely immersed in startup land as one of the first team members and eventual CTO of [Bookinglayer](https://www.bookinglayer.com) and then co-founder and CTO of [Bookex](https://www.usebookex.com) - both **very complex web and mobile applications** for accommodation and service providers to manage their inventory and reservations.

I am freshly dipping my big-toe into the world of freelancing, however I have worked with many different freelance developers in the past and so I understand what is required for a project based worker to be **productive** and stay on track **aligned with the company’s product vision.**
`;

  return (
    <div className="bg-pattern py-32" style={{ height: 1000 }}>
      <div id="description" className="container max-w-4xl">
        <div className="text-2xl font-black pb-2">Oliver Nicholson</div>
        <div className="text-gray-600">Byron Bay, Australia</div>
        <div className="text-gray-600 pb-2">UTC/GMT+11</div>
        <div className="text-gray-700">
          <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
        </div>
      </div>

      <style jsx>{`
        .bg-pattern {
          ${whiteDotGrid()}
        }
      `}</style>
    </div>
  );
};

export default Description;
