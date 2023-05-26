import React, { FC } from 'react';

import './ThemeButton.css';

interface ThemeButtonProps {
  toggleTheme: () => void;
  title: string;
  isDisabled: boolean;
}

export const ThemeButton: FC<ThemeButtonProps> = ({
  toggleTheme,
  title,
  isDisabled,
}): JSX.Element => {
  return (
    <div className={'wrap-btn'}>
      <button className={'btn'} onClick={toggleTheme} disabled={isDisabled}>
        <span className={'btn-span'}>{title}</span>
      </button>
    </div>
  );
};
