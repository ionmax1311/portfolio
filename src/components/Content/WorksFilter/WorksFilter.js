import React, { useState } from 'react';
import styled from './WorksFilter.module.css';

import WorksItem from './WorksItem/WorksItem';
import Hamburger from './Hamburger/Hamburger';

const WorksFilter = props => {
  const [open, setOpen] = useState(false);
  const [filteredItems, setFilteredItems] = React.useState(props.content);
  const [curId, setCurId] = React.useState(1);
  const filterTitle = [
    { id: 1, title: 'all' },
    { id: 2, title: 'react' },
    { id: 3, title: 'ajax' },
    { id: 4, title: 'html/css' },
    { id: 5, title: 'bootstrap' }
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const filterItems = filterTitle.map(item => (
    <li
      className={
        curId === item.id
          ? `${styled.activeItem} waves-effect orange btn `
          : 'waves-effect   btn'
      }
      onClick={() => {
        setCurId(item.id);
        setOpen(false);
        setFilteredItems(() => {
          if (item.title === 'all') {
            return props.content;
          } else
            return props.content.filter(
              el => el.tags.indexOf(item.title) !== -1
            );
        });
      }}
      key={item.id}
    >
      {item.title}
    </li>
  ));

  return (
    <div className={styled.filterWrap}>
      <Hamburger
        menuClicked={handleClick}
        isOpen={open}
        width={22}
        height={18}
        strokeWidth={1}
        rotate={0}
        color="#fff"
        borderRadius={5}
        animationDuration={0.3}
      />

      <div
        className={
          open
            ? ` ${styled.wrapTitleItem} ${styled.mobile}`
            : `${styled.wrapTitleItem}`
        }
      >
        <div className={styled.titleWrap}>
          <h3 className={styled.title}>works</h3>
        </div>
        <ul className={styled.titleFilterWrap}>{filterItems}</ul>
      </div>

      <div className={styled.line} />

      <div className={styled.contentWrap}>
        <WorksItem content={filteredItems} />
      </div>
    </div>
  );
};

export default WorksFilter;
