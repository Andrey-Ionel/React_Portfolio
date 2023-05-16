import React, { FC } from 'react';

import './ScrollArrow.css';
import arrowRight from '../../assets/images/arrow-black-right.svg';
import arrowBottom from '../../assets/images/arrow-bottom.svg';

interface ScrollArrowProps {
  handleArrows: string;
}

export const ScrollArrow: FC<ScrollArrowProps> = ({ handleArrows }) => {
  const scrollText = 'Scroll';
  const upText = 'UP';
  return (
    <>
      {handleArrows === 'down' && (
        <div className={'scroll'} id={'scroll-h'}>
          <span className={'scroll-text'}>
            {scrollText}
            <img className={'arrow-bottom'} src={arrowBottom} alt={''} />
          </span>
        </div>
      )}
      {handleArrows === 'up' && (
        <div className={'up'}>
          <a href={'#root'}>
            <span className={'up-text'}>
              {upText}
              <img className={'arrow-up'} src={arrowRight} alt={''} />
            </span>
          </a>
        </div>
      )}
    </>
  );
};
