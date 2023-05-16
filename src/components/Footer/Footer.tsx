import React, { FC } from 'react';

import { ScrollArrow } from '../ScrollArrow';

import './Footer.css';
import arrowRight from '../../assets/images/arrow-black-right.svg';

interface FooterProps {
  handleArrows: string;
}

export const Footer: FC<FooterProps> = ({ handleArrows }) => {
  const emailMeText = 'email me';
  const wantToCollaborate = 'Want to collaborate?';
  const phoneText = '+38 063 688 14 26';
  return (
    <footer>
      <div className={'contact'}>
        <span className={'footer-email-text'}>{wantToCollaborate}</span>
        <a
          className={'footer-email'}
          href={'mailto:andrey.ivanov688@gmail.com'}>
          {emailMeText}
          <img className={'arrow'} src={arrowRight} alt={''} />
        </a>
      </div>
      <a className={'footer-telephone'} href={'tel:+38 063 688 14 26'}>
        {phoneText}
      </a>
      <ScrollArrow handleArrows={handleArrows} />
    </footer>
  );
};
