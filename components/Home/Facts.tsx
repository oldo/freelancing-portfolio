import React from 'react';
import SectionHeader from '../SectionHeader';

interface FactsProps {}

const Facts: React.FC<FactsProps> = ({}) => {
  const facts = [
    {
      heading: `Software engineering is not my only engineering experience`,
      body: `My initial career path was as a mechanical engineer for thermal power generation systems. I then trained up as a marine engineer but found bobbing around at sea for months on end too socially isolating, so taught myself to code and have never looked back!`,
    },
    {
      heading: `Epic sailing adventures`,
      body: `For 4 months I joined the smallest boat to have ever sailed around the world from east-to-west under the great southern capes for a leg of its epic journey, travelling from Chile to Easter Island (Rapa Nui), Pitcairn Island and then up through French Polynesia.`,
    },
    {
      heading: `Surfing, travelling and making & breaking mechanical things`,
      body: `These are some of my favourite things to do when I'm away from my laptop.`,
    },
    {
      heading: `Typescript is not the only language that interests me`,
      body: `Having lived in Chile for 2 years I speak Spanish mas o menos fluently and am currently learning Portuguese to be able to communicate with my partner's family in Brazil.`,
    },
  ];

  return (
    <div>
      <SectionHeader title="Fun facts about me" />

      {facts.map((fact) => (
        <div key={fact.heading} className="flex flex-row pb-8">
          <div
            style={{
              height: 20,
              width: 20,
              minHeight: 20,
              minWidth: 20,
              marginTop: 3,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="pl-2">
            <div className="font-bold">{fact.heading}</div>
            <div className="flex-grow-0">{fact.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facts;
