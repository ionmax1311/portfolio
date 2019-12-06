import React from 'react';
import styled from './WorksFilter.module.css';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorksItem from './WorksItem/WorksItem';

const WorksFilter = props => {
  const [filteredItems, setFilteredItems] = React.useState(props.content);
  const [curId, setCurId] = React.useState(1);
  const filterTitle = [
    { id: 1, title: 'all' },
    { id: 2, title: 'react' },
    { id: 3, title: 'ajax' },
    { id: 4, title: 'html/css' },
    { id: 5, title: 'bootstrap' }
  ];

  const filterItems = filterTitle.map(item => (
    <li
      className={curId === item.id ? styled.activeItem : ''}
      onClick={() => {
        setCurId(item.id);

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
    <div>
      <div className={styled.wrapTitleItem}>
        <div className={styled.titleWrap}>
          <FontAwesomeIcon icon={faFlask} />
          <h3 className={styled.title}>works</h3>
        </div>
        <ul className={styled.titleFilterWrap}>{filterItems}</ul>
      </div>
      <div className={styled.contentWrap}>
        <WorksItem content={filteredItems} />
      </div>
    </div>
  );
};

export default WorksFilter;
