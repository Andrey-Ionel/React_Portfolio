import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import './Portfolio.css';
import arrowBottom from '../../assets/images/arrow-bottom.svg';
import arrowRight from '../../assets/images/arrow-black-right.svg';

enum ArrowScroll {
  'down' = 'down',
  'up' = 'up',
}

export const Portfolio: FC = memo(() => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [burger, setBurger] = useState(false);
  const [handleArrows, setHandleArrows] = useState(ArrowScroll.down);

  const scrollHandler = (e: DocumentEventMap['scroll']) => {
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
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkTheme(!darkTheme);
  }, [darkTheme]);

  const toggleBurgerMenu = useCallback(() => {
    setBurger(!burger);
  }, [burger]);

  const theme = darkTheme ? 'wrapper dark-theme' : 'wrapper';
  const isBurgerOpen = burger ? 'menu-open' : '';
  return (
    <div className={theme}>
      <header className={isBurgerOpen}>
        <div className="heading">
          <h1 className="gradient-text">portfolio</h1>
          <div className="wrap-btn">
            <button className="btn" onClick={toggleTheme}>
              <span className="btn-span">Try it</span>
            </button>
          </div>
        </div>
        <div className="burger-logo-container" onClick={toggleBurgerMenu}>
          <a className="burger-menu-button">
            <span className="burger-menu-lines"></span>
          </a>
        </div>
        <nav className="nav">
          <ul onClick={toggleBurgerMenu}>
            <li className="nav-item">
              <a className="nav-item-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-item-link telephone"
                href="tel:+38 063 688 14 26">
                +38 063 688 14 26
              </a>
            </li>
            <li className="nav-item">
              <span className="email-text">Whant to collaborate?</span>
            </li>
            <li className="nav-item">
              <a
                className="nav-item-link email"
                href="mailto:andrey.ivanov688@gmail.com">
                email me
                <img className="arrow" src={arrowRight} alt="" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="info">
          <div className="info-text">
            <p>Success - is 1 percent talent and 99 percent labor.</p>
          </div>
        </div>
        <div className="hero">
          <strong className="hero-text">Andrey Ionel</strong>
        </div>
        <ul className="links">
          <li className="link-item">
            <a href="https://www.linkedin.com/in/andrey-ionel">
              <svg
                className="svg-fill"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.70317 20.0937H7.31254V9.25001H3.70317V20.0937ZM7.54691 5.90625C7.53129 4.84375 6.76567 4.03126 5.53129 4.03126C4.29691 4.03126 3.48442 4.84375 3.48442 5.90625C3.48442 6.93749 4.26566 7.78124 5.48442 7.78124H5.50004C6.76567 7.78124 7.54691 6.93749 7.54691 5.90625ZM16.6875 20.0937H20.2969V13.875C20.2969 10.5469 18.5157 8.99998 16.1407 8.99998C14.2032 8.99998 13.3438 10.0781 12.875 10.8281H12.9063V9.24998H9.29691C9.29691 9.24998 9.34377 10.2656 9.29691 20.0937H12.9063V14.0312C12.9063 13.7187 12.9219 13.3906 13.0157 13.1562C13.2813 12.5156 13.875 11.8437 14.875 11.8437C16.1719 11.8437 16.6875 12.8281 16.6875 14.2968V20.0937ZM24 4.49999V19.5C24 21.9843 21.9844 24 19.5 24H4.50005C2.01568 24 6.10352e-05 21.9843 6.10352e-05 19.5V4.49999C6.10352e-05 2.01562 2.01568 0 4.50005 0H19.5C21.9844 0 24 2.01562 24 4.49999Z"
                  fill="#75715E"
                />
              </svg>
            </a>
          </li>
          <li className="link-item">
            <a href="https://github.com/Andrey-Ionel">
              <svg
                className="svg-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="#75715E"
                />
              </svg>
            </a>
          </li>
          <li className="link-item">
            <a href="https://www.facebook.com/arch.ivankin/">
              <svg
                className="svg-fill"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.5001 0C21.9844 0 24.0001 2.01562 24.0001 4.49999V19.5C24.0001 21.9843 21.9844 24 19.5001 24H16.5626V14.7031H19.6719L20.1407 11.0781H16.5626V8.76561C16.5626 7.71873 16.8438 7.01561 18.3594 7.01561L20.2657 7V3.76562C19.9375 3.71875 18.7969 3.62499 17.4844 3.62499C14.7188 3.62499 12.8125 5.31248 12.8125 8.40623V11.0781H9.68754V14.7031H12.8125V24H4.50005C2.01568 24 6.10352e-05 21.9843 6.10352e-05 19.5V4.49999C6.10352e-05 2.01562 2.01568 0 4.50005 0H19.5001Z"
                  fill="#75715E"
                />
              </svg>
            </a>
          </li>
        </ul>
        {handleArrows === 'down' && (
          <div className="scroll" id="scroll-h">
            <span className="scroll-text">
              Scroll
              <img className="arrow-bottom" src={arrowBottom} alt="" />
            </span>
          </div>
        )}
      </header>
      <section className="parallax"></section>
      <section className="skills" id="skills">
        <h2 className="skills-head">SKILLS</h2>
        <ul>
          <li className="skills-list">
            HTML/CSS
            <span className="html-css progress"></span>
          </li>
          <li className="skills-list">
            Responsive layout
            <span className="responsive progress"></span>
          </li>
          <li className="skills-list">
            Bootstrap
            <span className="bootstrap progress"></span>
          </li>
          <li className="skills-list">
            jQuery
            <span className="jquery progress"></span>
          </li>
          <li className="skills-list">
            CSS Preprocessors
            <span className="preprpocessors progress"></span>
          </li>
          <li className="skills-list">
            gulp
            <span className="gulp progress"></span>
          </li>
          <li className="skills-list">
            Git
            <span className="git progress"></span>
          </li>
        </ul>
      </section>
      <section className="projects" id="projects">
        <div className="projects-text">
          <h2 className="projects-head">PROJECTS</h2>
          <dl>
            <dt className="term">Mylib</dt>
            <dd className="description">
              Component library with html and css code examples
            </dd>
            <a
              className="git-link"
              href="https://github.com/Andrey-Ionel/MyLib">
              githab
              <svg
                className="svg-color"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="4"
                fill="none"
                viewBox="0 0 16 4">
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#F92672"
                    d="M11.598.016c.107-.026.223-.016.313.026l3.428 1.823c.054.03.09.072.09.12 0 .046-.036.093-.09.124l-3.428 1.85c-.09.041-.206.051-.313.025-.098-.026-.17-.083-.17-.15V2.666H.287C.125 2.667 0 2.594 0 2.5v-1c0-.094.125-.167.286-.167h11.143V.167c0-.068.062-.125.17-.151z"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path
                      fill="#fff"
                      d="M0 4H4V20H0z"
                      transform="rotate(-90 0 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <dt className="term">Adaptive Layout Example</dt>
            <dd className="description">html page with burger menu</dd>
            <a
              className="git-link"
              href="https://github.com/Andrey-Ionel/Responsive">
              githab
              <svg
                className="svg-color"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="4"
                fill="none"
                viewBox="0 0 16 4">
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#F92672"
                    d="M11.598.016c.107-.026.223-.016.313.026l3.428 1.823c.054.03.09.072.09.12 0 .046-.036.093-.09.124l-3.428 1.85c-.09.041-.206.051-.313.025-.098-.026-.17-.083-.17-.15V2.666H.287C.125 2.667 0 2.594 0 2.5v-1c0-.094.125-.167.286-.167h11.143V.167c0-.068.062-.125.17-.151z"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path
                      fill="#fff"
                      d="M0 4H4V20H0z"
                      transform="rotate(-90 0 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </dl>
        </div>
      </section>
      <section className="experience" id="experience">
        <h2 className="experience-head">EXPERIENCE</h2>
        <dl>
          <span className="period">august 2020 - november 2020</span>
          <dt className="term-exp">IT school Hillel</dt>
          <dd className="description-exp">Front-end basic course</dd>
          <a
            className="certificate-link"
            href="https://certificate.ithillel.ua/view/41591647/ru">
            certificate
          </a>
          <span className="period">december 2020 - now</span>
          <dt className="term-exp">IT school Hillel</dt>
          <dd className="description-exp">Front-end pro course</dd>
          <a className="certificate-link" href="#">
            certificate
          </a>
        </dl>
      </section>
      <footer>
        <div className="contact">
          <span className="footer-email-text">Whant to collaborate?</span>
          <a className="footer-email" href="mailto:andrey.ivanov688@gmail.com">
            email me
            <img className="arrow" src={arrowRight} alt={''} />
          </a>
        </div>
        <a className="footer-telephone" href="tel:+38 063 688 14 26">
          +38 063 688 14 26
        </a>
        {handleArrows === 'up' && (
          <div className="up">
            <a href="#root">
              <span className="up-text">
                UP
                <img className="arrow-up" src={arrowRight} alt={''} />
              </span>
            </a>
          </div>
        )}
      </footer>
      <button onClick={toggleTheme} className="custom-button">
        <span>Custom button</span>
      </button>
    </div>
  );
});
