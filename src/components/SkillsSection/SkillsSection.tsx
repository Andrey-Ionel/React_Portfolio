import React, { FC } from 'react';

import './SkillsSection.css';

interface Skill {
  title: string;
  class: string;
}

const skills: Skill[] = [
  {
    title: 'HTML/CSS',
    class: 'html-css',
  },
  {
    title: 'CSS Preprocessors',
    class: 'preprocessors',
  },
  {
    title: 'Responsive layout',
    class: 'responsive',
  },
  {
    title: 'Java Script',
    class: 'java-script',
  },
  {
    title: 'Java',
    class: 'java',
  },
  {
    title: 'Type Script',
    class: 'type-script',
  },
  {
    title: 'Webpack',
    class: 'web-pack',
  },
  {
    title: 'Git',
    class: 'git',
  },
  {
    title: 'React',
    class: 'react',
  },
  {
    title: 'React Native',
    class: 'react-native',
  },
  {
    title: 'Redux/Thunk',
    class: 'redux-thunk',
  },
  {
    title: 'Android Studio/Xcode',
    class: 'android-xcode',
  },
  {
    title: 'NodeJS',
    class: 'node-js',
  },
  {
    title: 'Jira',
    class: 'jira',
  },
  {
    title: 'Figma',
    class: 'figma',
  },
  {
    title: 'Fetch/Axios/GraphQL',
    class: 'fetch-axios-graphql',
  },
];

export const SkillsSection: FC = () => {
  const title = 'SKILLS';
  return (
    <div className={'skills'} id={'skills'}>
      <h2 className={'skills-head'}>{title}</h2>
      <ul>
        {skills.map(skill => {
          return (
            <li key={skill.class} className={'skills-list'}>
              {skill.title}
              <span className={`${skill.class} progress`}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
