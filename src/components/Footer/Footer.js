import React from 'react';
import styled from './Footer.module.css';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <p className={styled.copy}>
        <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
        Maksim Ionash
      </p>
      <div className={styled.linkWrap}>
        <a
          href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B8%D0%BE%D0%BD%D0%B0%D1%88-9b584614a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styled.linkedin} icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ionmax1311"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styled.github} icon={faGithubSquare} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
