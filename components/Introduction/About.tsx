import React from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Subheading from './Subheading';
import variants from './variants';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="container mx-auto pt-32">
      <div className="text-4xl leading-tight pb-12 font-black text-gray-800 flex flex-row justify-between">
        <Heading />
      </div>

      <Subheading />

      <motion.div variants={variants} initial="hidden" animate="visible">
        <div className="pt-8 max-w-5xl">
          <p>
            Since getting my first computer at the age of 6 (a Commodore 64 with
            cassette tape data storage 🤘) I've always enjoyed using computers
            as a tool to get stuff done, but I transitioned into a fulltime
            career in software development <strong>over 4 years ago</strong> and
            since then I have been completely immersed in startup land as one of
            the first team members and eventual CTO of Bookinglayer and then
            co-founder and CTO of Bookex - both{' '}
            <strong>very complex web and mobile applications</strong>{' '}
            for accommodation and service providers to manage their inventory
            and reservations.
          </p>

          <p>
            I am freshly dipping my big-toe into the world of freelancing,
            however I have worked with many different freelance developers in
            the past and so I understand what is required for a project based
            worker to be <strong>productive</strong> and stay on track{' '}
            <strong>aligned with the company’s product vision.</strong>
          </p>

          <p>
            Since getting my first computer at the age of 6 (a Commodore 64 with
            cassette tape data storage 🤘) I've always enjoyed using computers
            as a tool to get stuff done, but I transitioned into a fulltime
            career in software development <strong>over 4 years ago</strong> and
            since then I have been completely immersed in startup land as one of
            the first team members and eventual CTO of Bookinglayer and then
            co-founder and CTO of Bookex - both{' '}
            <strong>very complex web and mobile applications</strong>{' '}
            for accommodation and service providers to manage their inventory
            and reservations.
          </p>

          <p>
            I am freshly dipping my big-toe into the world of freelancing,
            however I have worked with many different freelance developers in
            the past and so I understand what is required for a project based
            worker to be <strong>productive</strong> and stay on track{' '}
            <strong>aligned with the company’s product vision.</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
