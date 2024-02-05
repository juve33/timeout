import { React, useState, useContext, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectTaskById, useUpdateTaskMutation, useDeleteTaskMutation } from '../slices/tasksApiSlice';
import { GetFilterContext } from '../pages/app';
import Checkbox from './Checkbox';
import './Task.css';

import './Buttons.css';

const useUpdateTask = () => useUpdateTaskMutation();
const useDeleteTask = () => useDeleteTaskMutation();

function Task({ taskId }) {
  const task = useSelector(state => selectTaskById(state, taskId));
  const [updateTask] = useUpdateTask();
  const [deleteTask] = useDeleteTask();
  const [isChecked, setIsChecked] = useState(false);

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

  const onDelete = async (task) => {
      await deleteTask({ id: task._id });
  }

  const getFilters = useContext(GetFilterContext);

  const hidden = () => {
    if ((getFilters[0].length > 0) && (getFilters[1].length > 0)) {
      if ((getFilters[0].includes(tasktype)) && (getFilters[1].some(f => task.tags.includes(f)))) {
        return '';
      } else {
        return ' hidden';
      }
    } else if ((getFilters[0].length > 0) || (getFilters[1].length > 0)) {
      if ((getFilters[0].includes(tasktype)) || (getFilters[1].some(f => task.tags.includes(f)))) {
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

  let now = new Date(Date.now());
  now = new Date(now.getFullYear(),now.getMonth(),now.getDate());
  let taskdate = new Date(task.date);
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
      <li key={task.id} className={(isChecked ? 'done ' : '') + color + hidden()}>
        <Checkbox value={task.completed} onChange={handleChange} />
        <div className={'data'}>
          <div className={'description'}>{task.title}</div>
          <time datetime={task.date}>until {task.date}</time>
        </div>
        <ul className='tags'>
          {task.tags.map((tag, index) => (
            <li key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className='edit' title='Task Options'>&#8943;</div>
        <div className='edit-menu'>
          <button onClick={() => onDelete(task)} title='Delete Task irreversibly'>Delete</button>
        </div>
      </li>
  );
}

export default memo(Task);
