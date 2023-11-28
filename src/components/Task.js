import React, { useState } from 'react';
import Checkbox from './Checkbox';
import done from './done';
import './Task.css';

import './Buttons.css';

function Task({ items, type }) {
    let tasktype;
    const [checked, setChecked] = useState(false);

    const handleChange = (id) => {
        setTimeout(() => {
            setChecked(!checked);
            done(id);
        }, 500);
    };

    if (items.type === "Critic") {
        tasktype = 'task red';
    } else if (items.type === "Scheduled for Today") {
        tasktype = 'task green';
    } else if (items.type === "Incomplete") {
        tasktype = 'task yellow';
    } else if (items.type === "Planned") {
        tasktype = 'task purple';
    }

    return (
        <li key={items.id} className={checked ? 'task done red' : tasktype}>
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

export default Task;
