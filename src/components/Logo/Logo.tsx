import React, { FC } from 'react';

import './Logo.css';

export const Logo: FC = (): JSX.Element => {
  const portfolioText = 'Portfolio';
  return <h1 className="gradient-text">{portfolioText}</h1>;
};
