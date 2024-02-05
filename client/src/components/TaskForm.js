import { React, createContext, useContext, useState, useEffect, memo } from 'react';
import { useAddNewTaskMutation } from "../slices/tasksApiSlice";
import { GetPageContext, SetPageContext } from '../layouts';
import { filters } from '../pages/app';

import FormListItem from '../components/FormListItem';

import './Forms.css';
import './Buttons.css';

//import { userID } from ".";
let userID = "65ad8f78327a2ab725025b57";

export const GetTaskFormContext = createContext();
export const SetTaskFormContext = createContext();

function TaskForm(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  const [addNewTask, { isLoading, isSuccess }] = useAddNewTaskMutation();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess]);

  const reset = () => {
    document.getElementById("taskForm").reset();
    setSelectedTags([]);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    if (canSave()) {
      await addNewTask({ user: userID, title, selectedTags, date });
      setPage(previousState => { return { ...previousState, taskFormOpen: false }});
      reset();
    }
  };

  const canSave = () => [title, date].every(Boolean) && !isLoading;

  return (
    <>
      <form enabled={getPage.taskFormOpen.toString()} id="taskForm" className="task-form" onSubmit={submitForm}>
        <h2>{props.title}</h2>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" onChange={(e) => setTitle(e.target.value)} placeholder="make homework" required />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" onChange={(e) => setDate(e.target.value)} required />
        <GetTaskFormContext.Provider value={selectedTags}>
          <label>Select tags:</label>
          <ul className="tags">
            {filters.tags.map((tag) => <FormListItem key={tag.id} enable={() => setSelectedTags([...selectedTags,tag.title])} disable={() => setSelectedTags(selectedTags.filter(filter => filter !== tag.title))} content={tag.title} color={tag.color} />)}
          </ul>
        </GetTaskFormContext.Provider>
        <div className="button-wrapper">
          <input onClick={() => setPage(previousState => { return { ...previousState, taskFormOpen: false }})} type="button" value="Cancel" />
          <input onClick={reset} type="button" value="Reset" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default memo(TaskForm);
