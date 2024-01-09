import { React, useState, useContext, memo } from 'react';
import { GetFilterContext } from '../pages/app';
import Checkbox from './Checkbox';
import './Task.css';

import './Buttons.css';

function Task({ items, type }) {

    const getFilters = useContext(GetFilterContext);

    const hidden = () => {
      if ((getFilters[0].length > 0) && (getFilters[1].length > 0)) {
        if ((getFilters[0].includes(tasktype)) && (getFilters[1].some(f => items.tags.includes(f)))) {
          return '';
        } else {
          return ' hidden';
        }
      } else if ((getFilters[0].length > 0) || (getFilters[1].length > 0)) {
        if ((getFilters[0].includes(tasktype)) || (getFilters[1].some(f => items.tags.includes(f)))) {
          return '';
        } else {
          return ' hidden';
        }
      } else {
        return '';
      }
    }

    let tasktype;
    let color;
    const [checked, setChecked] = useState(false);

    const handleChange = (id) => {
        setChecked(!checked);
    };

    let now = new Date(Date.now());
    now = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let taskdate = new Date(items.date);
    taskdate = new Date(taskdate.getFullYear(),taskdate.getMonth(),taskdate.getDate());
    let datedif = Date.parse(taskdate) - Date.parse(now);
    if ((datedif <= 0) && !(now.toJSON() === taskdate.toJSON())) {
      tasktype = "overdue";
      color = 'red';
    } else if ((datedif <= 86400000) && (now.toJSON() === taskdate.toJSON())) {
      tasktype = "today";
      color = 'green';
    } else {
      now.setDate(now.getDate() + 1);
      if ((datedif <= 172800000) && (now.toJSON() === taskdate.toJSON())) {
        tasktype = "tomorrow";
        color = 'yellow';
      } else {
        tasktype = "soon";
        color = 'purple';
      }
    }

    return (
        <li key={items.id} className={(checked ? 'done ' : '') + color + hidden()}>
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
