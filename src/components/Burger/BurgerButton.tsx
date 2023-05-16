import React, { FC } from 'react';

import './styles/BurgerButton.css';

interface BurgerButtonProps {
  toggleBurgerMenu: () => void;
}

export const BurgerButton: FC<BurgerButtonProps> = ({ toggleBurgerMenu }) => {
  return (
    <div className={'burger-logo-container'} onClick={toggleBurgerMenu}>
      <a className={'burger-menu-button'}>
        <span className={'burger-menu-lines'}></span>
      </a>
    </div>
  );
};
