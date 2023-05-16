import React, { FC, useCallback, useState } from 'react';

import { ScrollArrow } from '../ScrollArrow';
import { Logo } from '../Logo';
import { ThemeButton } from '../ThemeButton';
import { Burger } from '../Burger';
import { HeroSection } from '../HeroSection';
import { ExternalLinks } from '../ExternalLinks';

import './Header.css';

interface HeaderProps {
  handleArrows: string;
  themeTitle: string;
  toggleTheme: () => void;
  isDisabled: boolean;
}

export const Header: FC<HeaderProps> = ({
  handleArrows,
  themeTitle,
  toggleTheme,
  isDisabled,
}) => {
  const [burger, setBurger] = useState<boolean>(false);
  const burgerOpen = burger ? 'header menu-open' : 'header';

  const toggleBurgerMenu = useCallback(() => {
    setBurger(!burger);
  }, [burger]);

  return (
    <header className={burgerOpen}>
      <div className={'heading'}>
        <Logo />
        <ThemeButton
          toggleTheme={toggleTheme}
          title={themeTitle}
          isDisabled={isDisabled}
        />
      </div>
      <Burger toggleBurgerMenu={toggleBurgerMenu} />
      <HeroSection />
      <ExternalLinks />
      <ScrollArrow handleArrows={handleArrows} />
    </header>
  );
};
