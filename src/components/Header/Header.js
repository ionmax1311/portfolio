import React from 'react';
import Typed from 'react-typed';
import styled from './Header.module.css';

const Header = () => {
  return (
    <header className={styled.header}>
      <div className={styled.wrapTitle}>
        <h4 className={styled.title}>Maksim Ionash</h4>
        <Typed
          strings={[
            'WEB CODER',
            'REACT JUNIOR DEWELOPER',
            'FRONTEND DEVELOPER'
          ]}
          className={styled.subTitle}
          typeSpeed={90}
          backSpeed={20}
          loop={true}
        ></Typed>
      </div>
      <p className={styled.text}>
        Here are some of my works that I did during study and work
      </p>
    </header>
  );
};

export default Header;
