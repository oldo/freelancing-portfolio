import React from 'react';

import SectionHeader from '../SectionHeader';

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <div>
      <SectionHeader title="Allow myself to introduce... myself" />
      <p>
        My name is Ollie. I’m a <strong>frontend developer</strong> who loves{' '}
        <strong>React & React Native</strong> and is also{' '}
        <strong>building backend skills.</strong>
      </p>

      <p>
        I have a <strong>passion for creating clean, efficient UI</strong> that
        looks <strong>pixel perfect</strong> on all devices and am excited to
        find a project to sink my teeth into.
      </p>

      <p>
        I've always enjoyed messing around with computers from a very young age,
        but transitioned into a fulltime career in software development{' '}
        <strong>almost 5 years ago</strong> and since then I have been
        completely immersed in startup land as one of the first team members and
        eventual CTO of{' '}
        <a
          href="https://www.bookinglayer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bookinglayer
        </a>{' '}
        and then co-founder and CTO of{' '}
        <a
          href="https://www.usebookex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bookex
        </a>{' '}
        - both <strong>very complex web and mobile applications</strong> for
        accommodation and service providers to manage their inventory and
        reservations.
      </p>

      <p>
        I am freshly dipping my big-toe into the world of freelancing, however I
        have worked with many different freelance developers in the past and so
        I understand what is required for a project based worker to be{' '}
        <strong>productive</strong> and stay on track{' '}
        <strong>aligned with the company’s product vision.</strong>
      </p>

      <p className="mt-8">
        <strong>
          If you need some help with a project or product then{' '}
          <a
            href="mailto:oldo.nicho@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            I'd love to hear from you!
          </a>
        </strong>
      </p>
    </div>
  );
};

export default Introduction;
