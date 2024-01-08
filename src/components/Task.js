import { React, useState, useContext, memo } from 'react';
import { GetFilterContext } from '../pages/app';
import Checkbox from './Checkbox';
import './Task.css';

import './Buttons.css';

function Task({ items, type }) {

    const getFilters = useContext(GetFilterContext);

    const hidden = () => {
      if ((getFilters[0].length > 0) && (getFilters[1].length > 0)) {
        if ((getFilters[0].includes(items.type)) && (getFilters[1].some(f => items.tags.includes(f)))) {
          return '';
        } else {
          return ' hidden';
        }
      } else if ((getFilters[0].length > 0) || (getFilters[1].length > 0)) {
        if ((getFilters[0].includes(items.type)) || (getFilters[1].some(f => items.tags.includes(f)))) {
          return '';
        } else {
          return ' hidden';
        }
      } else {
        return '';
      }
    }

    let tasktype;
    const [checked, setChecked] = useState(false);

    const handleChange = (id) => {
        setChecked(!checked);
    };

    if (items.type === "overdue") {
        tasktype = 'red';
    } else if (items.type === "today") {
        tasktype = 'green';
    } else if (items.type === "tomorrow") {
        tasktype = 'yellow';
    } else if (items.type === "soon") {
        tasktype = 'purple';
    }

    return (
        <li key={items.id} className={(checked ? 'done ' : '') + tasktype + hidden()}>
          <Checkbox value={checked} onChange={() => handleChange(items.id)} />
          <div className={'data'}>
            <div className={'description'}>{items.title}</div>
            <time datetime={items.date}>until {items.date}</time>
          </div>
          <ul className='tags'>
            {items.tags.map((tag, index) => (
              <li key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <div className='edit' title='Edit task'>&#8943;</div>
        </li>
    );
}

export default memo(Task);
