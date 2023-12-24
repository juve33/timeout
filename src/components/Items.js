import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Done from './Done';
import '../styles/items.css';
import '../styles/tasks.css';
import Add from '../features/Add';

function Items({ tasks }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (id) => {
        setTimeout(() => {
            setIsChecked(!isChecked);
            Done(id);
        }, 500);
    };

    const giveColor = (type) => {
        const baseClass = 'task';
        switch (type) {
            case "Critic":
                return `${baseClass} Critic`;
            case "Scheduled for Today":
                return `${baseClass} Scheduled_for_Today`;
            case "Incomplete":
                return `${baseClass} Incomplete`;
            case "Planned":
                return `${baseClass} Planned`;
            default:
                return baseClass;
        }
    };

    return (
        tasks.length > 0 ? tasks.map((item) => (
            <div key={item.id} className={isChecked ? 'task done' : giveColor(item.type)}>
                {!item.completed && <Checkbox value={item.completed} onChange={() => handleChange(item.id)} />}
                <div className={isChecked ? 'data_done' : 'data'}>
                    <div className={isChecked ? 'title_done' : 'title'}>{item.title}</div>
                    {!isChecked && <div className='date'>until: {item.date}</div>}
                </div>
                <div className='tags'>
                    {item.tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        )) :
            (
                <div>
                    <p>You don't have any tasks</p>
                    <Add name={'add'} />
                </div>
            )
    );
}

export default Items;