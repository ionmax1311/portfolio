import React from 'react';
import styled from './Content.module.css';
import WorksFilter from './WorksFilter/WorksFilter';

const Content = props => {
  // console.log(props.content);

  return (
    <main className={styled.content}>
      <div className={styled.line} />
      <WorksFilter content={props.content} />
      <div className={styled.line} />
    </main>
  );
};

export default Content;
