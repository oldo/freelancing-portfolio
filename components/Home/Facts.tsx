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
      <ul className="arrow-list">
        {facts.map((fact) => (
          <li>
            <span className="font-bold">{fact.heading}</span>
            <br />
            <span className="flex-grow-0">{fact.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facts;
