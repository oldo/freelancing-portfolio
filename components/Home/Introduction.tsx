import React from 'react';
import ExternalLink from '../ExternalLink';

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
        look <strong>pixel perfect</strong> on all devices and am excited to
        find a project to sink my teeth into.
      </p>

      <p>
        Since getting my first computer at the age of 6 (a Commodore 64 with
        cassette tape data storage 🤘) I've always enjoyed using computers as a
        tool to get stuff done, but I transitioned into a fulltime career in
        software development <strong>over 4 years ago</strong> and since then I
        have been completely immersed in startup land as one of the first team
        members and eventual CTO of{' '}
        <ExternalLink url="https://www.bookinglayer.com" text="Bookinglayer" />{' '}
        and then co-founder and CTO of{' '}
        <ExternalLink url="https://www.usebookex.com" text="Bookex" /> - both{' '}
        <strong>very complex web and mobile applications</strong> for
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
          <ExternalLink
            url="mailto:oldo.nicho@gmail.com"
            text="I'd love to hear from you!"
            highlight
          />
        </strong>
      </p>
    </div>
  );
};

export default Introduction;
