import React, { Fragment } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { whiteDotGrid } from '../../styles/background-patterns';

interface HeroProps {}

const subheadingText = `
My name is Ollie. I’m a **React & React Native developer** with **backend skills.**

I have a passion for creating **clean, efficient UI** that look **pixel perfect on all devices.**
`;

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Fragment>
      <div
        id="hero"
        className="relative bg-pattern flex flex-col justify-center h-screen w-full"
      >
        <div className="container">
          {/* <div className="heading pb-8">
            <ReactMarkdown>{headingText}</ReactMarkdown>
          </div> */}
          <div className="text-5xl leading-snug pb-8" style={{ fontSize: '4rem'}}>
            <div>CLEAN</div>
            <div>EFFICIENT</div>
            <div>PIXEL PERFECT UI</div>
          </div>
          <div className="subheading">
            <ReactMarkdown>{subheadingText}</ReactMarkdown>
          </div>
        </div>

        <div
          className="absolute right-0 bottom-0"
          style={{ height: '100vh', width: 'calc(100vh / 2)' }}
        >
          <Image src="/ollie-half.png" alt="Ollie" layout="fill" />
        </div>
      </div>

      <style jsx>{`
        .bg-pattern {
          ${whiteDotGrid()}
        }
      `}</style>
    </Fragment>
  );
};

export default Hero;
