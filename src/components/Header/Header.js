import React from 'react';
import styled from './Header.module.css';

const Header = () => {
  return (
    <header className={styled.header}>
      <h2 className={styled.title}>Maksim Ionash</h2>
      <p className={styled.text}>
        Here are some of my works that I did during study and work
      </p>
    </header>
  );
};

export default Header;
