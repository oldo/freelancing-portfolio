import React, { Fragment } from 'react';

import theme from '../../../lib/theme';
import { topography } from '../../../styles/background-patterns';
import Experiences from './Experiences';
import SpecialisingIn from './SpecialisingIn';

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = ({}) => {
  console.log(theme);
  return (
    <Fragment>
      <div className="bg-pattern pb-12">
        <SpecialisingIn />
        <Experiences />
      </div>

      <style jsx>{`
        .highlight {
          color: ${theme.colors.accent.default};
        }
        .bg-pattern {
          ${topography(
            theme.colors.accent.default,
            theme.colors.primary[900],
            0.1
          )}
        }
      `}</style>
    </Fragment>
  );
};

export default Introduction;
