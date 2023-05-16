import React, { FC } from 'react';

import './CustomButton.css';

interface ThemeButtonProps {
  toggleTheme: () => void;
  isDisabled: boolean;
  title: string;
}

export const CustomButton: FC<ThemeButtonProps> = ({
  toggleTheme,
  isDisabled,
  title,
}) => {
  return (
    <button
      onClick={toggleTheme}
      className={
        isDisabled ? 'custom-button-disabled custom-button' : 'custom-button'
      }
      disabled={isDisabled}>
      <span>{title}</span>
    </button>
  );
};
