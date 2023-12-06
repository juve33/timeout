import { React, useState, useContext, memo } from 'react';
import { GetFilterContext } from '../pages/app';
import Checkbox from './Checkbox';
import done from './done';
import './Task.css';

import './Buttons.css';

function Task({ items, type }) {

    const getFilters = useContext(GetFilterContext);

    const hidden = () => {
      if (getFilters.length > 0) {
        if ((items.type === getFilters[0]) || (items.tags.includes(getFilters[0]))) {
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
        setTimeout(() => {
            setChecked(!checked);
            done(id);
        }, 500);
    };

    if (items.type === "overdue") {
        tasktype = 'task red';
    } else if (items.type === "Today") {
        tasktype = 'task green';
    } else if (items.type === "tomorrow") {
        tasktype = 'task yellow';
    } else if (items.type === "soon") {
        tasktype = 'task purple';
    }

    return (
        <li key={items.id} className={(checked ? 'task done red' : tasktype) + hidden()}>
          {!checked && <Checkbox value={checked} onChange={() => handleChange(items.id)} />}
          <div className={'data'}>
            <div className={'title'}>{items.title}</div>
            {!checked && <div className='date'>until: {items.date}</div>}
          </div>
          <div className='tags'>
            {items.tags.map((tag, index) => (
              <div key={index} className='tag'>
                {tag}
              </div>
            ))}
          </div>
        </li>
    );
}

export default memo(Task);
