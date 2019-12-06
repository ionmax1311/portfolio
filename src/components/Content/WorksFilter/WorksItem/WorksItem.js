import React, { useState } from 'react';
import styled from './WorksItem.module.css';

const WorksItem = props => {
  const [hover, setHover] = useState(false);
  const [curId, setCurId] = useState(null);

  const onMouseEnter = id => {
    setHover(true);
    setCurId(id);
  };

  const onMouseLeave = () => {
    setHover(false);
    setCurId(null);
  };

  const worksItem = props.content.map(item => {
    return (
      <div
        className={styled.itemWrap}
        onMouseEnter={() => {
          onMouseEnter(item.id);
        }}
        onMouseLeave={onMouseLeave}
        key={item.id}
      >
        <div
          className={
            hover && curId === item.id
              ? `${styled.hover} ${styled.itemHover}`
              : styled.itemHover
          }
        >
          <p className={styled.description}>{item.desc}</p>

          <div className={styled.wrapButtons}>
            <a
              className={styled.button}
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              href={item.demo}
            >
              DEMO
            </a>

            <a
              className={styled.button}
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              href={item.code}
            >
              CODE
            </a>
          </div>
        </div>

        <img src={item.img} alt="img" width="200" height="150" />

        <span className={styled.tagsItem}>{item.tagsStr} </span>
        {item.title}
      </div>
    );
  });
  return <div className={styled.wrap}>{worksItem}</div>;
};

export default WorksItem;
