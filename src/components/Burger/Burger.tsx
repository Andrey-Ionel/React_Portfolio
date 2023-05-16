import React, { FC } from 'react';

import { BurgerButton } from './BurgerButton';

import './styles/Burger.css';

import arrowRight from '../../assets/images/arrow-black-right.svg';

interface BurgerProps {
  toggleBurgerMenu: () => void;
}

interface SectionNavigation {
  title: string;
  link: string;
  hasImage: boolean;
  isPhone?: boolean;
  isCollaborate?: boolean;
}

const sectionNavigation: SectionNavigation[] = [
  {
    title: 'Skills',
    link: '#skills',
    hasImage: false,
  },
  {
    title: 'Summary',
    link: '#summary',
    hasImage: false,
  },
  {
    title: 'Experience',
    link: '#experience',
    hasImage: false,
  },
  {
    title: '+38 063 688 14 26',
    link: 'tel:+38 063 688 14 26',
    hasImage: false,
    isPhone: true,
  },
  {
    title: 'Want to collaborate?',
    link: '',
    hasImage: false,
    isCollaborate: true,
  },
  {
    title: 'email me',
    link: 'mailto:andrey.ivanov688@gmail.com',
    hasImage: true,
  },
];

export const Burger: FC<BurgerProps> = ({ toggleBurgerMenu }) => {
  return (
    <>
      <BurgerButton toggleBurgerMenu={toggleBurgerMenu} />
      <nav className={'nav'}>
        <ul onClick={toggleBurgerMenu}>
          {sectionNavigation.map(item => {
            return (
              <li className={'nav-item'} key={item.title}>
                {item?.isCollaborate && (
                  <span className={'email-text'}>{item.title}</span>
                )}
                {!item?.isCollaborate && (
                  <a
                    className={`nav-item-link ${item?.isPhone && 'telephone'}`}
                    href={item.link}>
                    {item.title}
                    {item.hasImage && (
                      <img className={'arrow'} src={arrowRight} alt="" />
                    )}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
