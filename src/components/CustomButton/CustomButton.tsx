import React, { FC } from 'react';

import './CustomButton.css';

interface ThemeButtonProps {
  toggleTheme: () => void;
  isDisabled: boolean;
  title: string;
}

type Class = 'custom-button-disabled custom-button' | 'custom-button';

export const CustomButton: FC<ThemeButtonProps> = ({
  toggleTheme,
  isDisabled,
  title,
}): JSX.Element => {
  const ButtonClass: Class = isDisabled
    ? 'custom-button-disabled custom-button'
    : 'custom-button';
  return (
    <button onClick={toggleTheme} className={ButtonClass} disabled={isDisabled}>
      <span>{title}</span>
    </button>
  );
};
