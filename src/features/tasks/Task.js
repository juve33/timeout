import React, { useState } from 'react';
import Checkbox from '../../components/Checkbox';
import '../../styles/tasks.css';
import '../../styles/items.css';
import { useSelector } from 'react-redux';
import { selectTaskById, useUpdateTaskMutation, useDeleteTaskMutation } from './tasksApiSlice';

const useUpdateTask = () => useUpdateTaskMutation();
const useDeleteTask = () => useDeleteTaskMutation();

function Task({ taskId }) {
    const task = useSelector(state => selectTaskById(state, taskId));
    const [updateTask] = useUpdateTask();
    const [deleteTask] = useDeleteTask();
    const [isChecked, setIsChecked] = useState(false);

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

    const handleChange = async () => {
        const { id, ...taskWithoutId } = { ...task, userID: "65ad8f78327a2ab725025b57" };
        console.log(taskWithoutId);
        await updateTask({
            ...taskWithoutId,
            completed: !task.completed,
        });
        console.log(task);
        setTimeout(() => {
            setIsChecked(true);
        }, 500);
    };

    const deleteTaskbtn = async (task) => {
        await deleteTask({ id: task._id });
    }

    if (task) {
        const taskClass = isChecked || task.completed ? 'task done' : giveColor(task.type);

        return (
            <div key={task._id} className={taskClass}>
                {!task.completed && <Checkbox value={task.completed} onChange={handleChange} />}
                <div className={isChecked ? 'data_done' : 'data'}>
                    <div className={isChecked || task.completed ? 'title_done' : 'title'}>{task.title}</div>
                    <button onClick={() => deleteTask(task)}>delete</button>
                    {!isChecked && <div className='date'>until: {task.date}</div>}
                </div>
                <div className='tags'>
                    {task.tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Task;
