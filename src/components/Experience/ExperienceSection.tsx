import React, { FC } from 'react';

import './ExperienceSection.css';

interface Experience {
  period: string;
  place: string;
  naming: string;
  isCommercial: boolean;
  link?: string;
}

const allExperience: Experience[] = [
  {
    period: 'august 2020 - november 2020 (HTML/CSS)',
    place: 'IT school Hillel',
    naming: 'Front-end basic course',
    isCommercial: false,
    link: 'https://certificate.ithillel.ua/view/41591647/en',
  },
  {
    period: 'december 2020 - april 2021 (Java Script)',
    place: 'IT school Hillel',
    naming: 'Front-end pro course',
    isCommercial: false,
    link: 'https://certificate.ithillel.ua/view/38454008/en',
  },
  {
    period: 'may 2021 - june 2021 (React)',
    place: 'IT school Hillel',
    naming: 'React course',
    isCommercial: false,
    link: 'https://certificate.ithillel.ua/view/13117252/en',
  },
  {
    period: 'july 2021 - now (Full time work)',
    place: 'Metro Global Ukraine',
    naming: 'React/React Native Developer',
    isCommercial: true,
    link: '',
  },
];

export const ExperienceSection: FC = () => {
  const title = 'SKILLS';
  const certificateText = 'certificate';
  return (
    <div className={'experience'} id={'experience'}>
      <h2 className={'experience-head'}>{title}</h2>
      <dl>
        {allExperience.map(exp => {
          return (
            <div key={exp.period}>
              <span className={'period'}>{exp.period}</span>
              <dt className={'term-exp'}>{exp.place}</dt>
              <dd className={'description-exp'}>{exp.naming}</dd>
              <a className={'certificate-link'} href={exp.link}>
                {!exp.isCommercial && certificateText}
              </a>
            </div>
          );
        })}
      </dl>
    </div>
  );
};
