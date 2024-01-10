import { React, useState, useContext, memo } from 'react';
import { GetFilterContext } from '../pages/app';
import Checkbox from './Checkbox';
import './Task.css';

import './Buttons.css';

function Task({ item, onEdit, onDelete }) {

    const getFilters = useContext(GetFilterContext);

    const hidden = () => {
      if ((getFilters[0].length > 0) && (getFilters[1].length > 0)) {
        if ((getFilters[0].includes(tasktype)) && (getFilters[1].some(f => item.tags.includes(f)))) {
          return '';
        } else {
          return ' hidden';
        }
      } else if ((getFilters[0].length > 0) || (getFilters[1].length > 0)) {
        if ((getFilters[0].includes(tasktype)) || (getFilters[1].some(f => item.tags.includes(f)))) {
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
    let taskdate = new Date(item.date);
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
        <li key={item.id} className={(checked ? 'done ' : '') + color + hidden()}>
          <Checkbox value={checked} onChange={() => handleChange(item.id)} />
          <div className={'data'}>
            <div className={'description'}>{item.title}</div>
            <time datetime={item.date}>until {item.date}</time>
          </div>
          <ul className='tags'>
            {item.tags.map((tag, index) => (
              <li key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <div className='edit' title='Task Options'>&#8943;</div>
          <div className='edit-menu'>
            <button onClick={onDelete} title='Delete Task irreversibly'>Delete</button>
          </div>
        </li>
    );
}

export default memo(Task);
