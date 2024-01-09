import { createContext, useContext, useState, memo } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';
import { filters } from '../pages/app';

import FormListItem from '../components/FormListItem';

import './Forms.css';
import './Buttons.css';

export const GetTaskFormContext = createContext();
export const SetTaskFormContext = createContext();

function TaskForm(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [selectedFolder, setSelectedFolder] = useState(filters.folders[0].title);
  const [selectedTags, setSelectedTags] = useState([]);

  const reset = () => {
    document.getElementById("taskForm").reset();
    setSelectedFolder(filters.folders[0].title);
    setSelectedTags([]);
  }

  const submitForm = (e) => {
    setPage(previousState => { return { ...previousState, taskFormOpen: false }});
    props.onAddTask(description,date,selectedFolder,selectedTags);
    reset();
    e.preventDefault();
  }

  return (
    <>
      <form enabled={getPage.taskFormOpen.toString()} id="taskForm" className="task-form" onSubmit={submitForm}>
        <h2>{props.title}</h2>
        <label for="description">Description:</label>
        <input type="text" id="description" onChange={(e) => setDescription(e.target.value)} placeholder="make homework" required />
        <label for="date">Date:</label>
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
