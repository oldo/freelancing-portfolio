import React from 'react';

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <>
      <div className="text-5xl leading-snug pb-12" style={{ fontSize: '4rem' }}>
        <div>CLEAN</div>
        <div>EFFICIENT</div>
        <div>PIXEL PERFECT UI</div>
      </div>
      <div className="text-xl">
        <p>
          My name is Ollie. I’m a{' '}
          <strong>React & React Native developer</strong> with{' '}
          <strong>backend skills.</strong>
        </p>
        <p>
          I have a passion for creating <strong>clean, efficient UI</strong>{' '}
          that look <strong>pixel perfect on all devices.</strong>
        </p>
      </div>

      <style jsx>{`
        p {
          @apply text-2xl;
        }
      `}</style>
    </>
  );
};

export default Landing;
