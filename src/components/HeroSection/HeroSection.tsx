import React, { FC } from 'react';

import './HeroSection.css';

export const HeroSection: FC = (): JSX.Element => {
  const successText = 'Success - is 1 percent talent and 99 percent labor.';
  const fullNameText = 'Andrey Ionel';
  return (
    <>
      <div className={'info'}>
        <div className={'info-text'}>
          <p>{successText}</p>
        </div>
      </div>
      <div className={'hero'}>
        <strong className={'hero-text'}>{fullNameText}</strong>
      </div>
    </>
  );
};
