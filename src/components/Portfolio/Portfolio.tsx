import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { SkillsSection } from '../SkillsSection';
import { ExperienceSection } from '../Experience';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './Portfolio.css';

enum ArrowScroll {
  'down' = 'down',
  'up' = 'up',
}
type Title = 'Dark' | 'Light';
type Class = 'wrapper dark-theme' | 'wrapper';

export const Portfolio: FC = memo((): JSX.Element => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const [handleArrows, setHandleArrows] = useState<ArrowScroll>(
    ArrowScroll.down,
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const timerId = useRef<NodeJS.Timer | null>(null);

  const scrollHandler = (e: DocumentEventMap['scroll']): void => {
    const target = e.target as Document;
    const screenBottom =
      target.documentElement.scrollHeight -
        (target?.documentElement?.scrollTop + window.innerHeight) <
      150;
    if (screenBottom) {
      setHandleArrows(ArrowScroll.up);
    } else {
      setHandleArrows(ArrowScroll.down);
    }
  };

  useEffect(() => {
    if (!!timerId?.current) {
      clearTimeout(timerId.current || 0);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const toggleTheme = useCallback((): void => {
    setIsDisabled(true);
    setDarkTheme(!darkTheme);
    timerId.current = setTimeout(() => {
      setIsDisabled(false);
    }, 750);
  }, [darkTheme]);

  const theme: Class = darkTheme ? 'wrapper dark-theme' : 'wrapper';
  const themeTitle: Title = darkTheme ? 'Dark' : 'Light';

  return (
    <div className={theme}>
      <Header
        handleArrows={handleArrows}
        themeTitle={themeTitle}
        toggleTheme={toggleTheme}
        isDisabled={isDisabled}
      />
      <div className={'parallax'} />
      <SkillsSection />
      <div className={'summary'} id={'summary'} />
      <ExperienceSection />
      <Footer handleArrows={handleArrows} />
    </div>
  );
});
