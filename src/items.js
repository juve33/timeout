import React, { useState } from 'react';
import Checkbox from './Checkbox';
import './styles/items.css';
import done from './done';
import './styles/tasks.css';

function Items({ items, type }) {
    let tasktype;
    const [checked, setChecked] = useState(false);

    const handleChange = (id) => {
        setTimeout(() => {
            setChecked(!checked);
            done(id);
        }, 500);
    };

    if (items.type === "Critic") {
        tasktype = 'task Critic';
    } else if (items.type === "Scheduled for Today") {
        tasktype = 'task Scheduled_for_Today';
    } else if (items.type === "Incomplete") {
        tasktype = 'task Incomplete';
    } else if (items.type === "Planned") {
        tasktype = 'task Planned';
    }

    return (
        <div>
            <button key={items.id} className={checked ? 'task done' : tasktype}>
                {!checked && <Checkbox value={checked} onChange={() => handleChange(items.id)} />}
                <div className={checked ? 'data_done' : 'data'}>
                    <div className={checked ? 'title_done' : 'title'}>{items.title}</div>
                    {!checked && <div className='date'>until: {items.date}</div>}
                </div>
                <div className='tags'>
                    {items.tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    ))}
                </div>
            </button>
        </div>
    );
}

export default Items;
