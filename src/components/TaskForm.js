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
  const [selectedFolder, setselectedFolder] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const reset = () => {
    document.getElementById("taskForm").reset();
    setselectedFolder("");
    setSelectedTags([]);
  }

  const submitForm = () => {
    setPage(previousState => { return { ...previousState, taskFormOpen: false }});
    props.onAddTask(description,date,selectedFolder,selectedTags);
    reset();
  }

  return (
    <>
      <form enabled={getPage.taskFormOpen.toString()} id="taskForm" className="task-form">
        <h2>{props.title}</h2>
        <label>
          Description:
          <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="make homework" />
        </label>
        <label>
          Date:
          <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
        </label>
        <GetTaskFormContext.Provider value={selectedFolder}>
          <ul className="folders">
            {filters.folders.map((folder) => <FormListItem key={folder.id} enable={() => setselectedFolder(folder.title)} disable={() => setselectedFolder("")} content={folder.title} color={folder.color} />)}
          </ul>
        </GetTaskFormContext.Provider>
        <GetTaskFormContext.Provider value={selectedTags}>
          <ul className="tags">
            {filters.tags.map((tag) => <FormListItem key={tag.id} enable={() => setSelectedTags([...selectedTags,tag.title])} disable={() => setSelectedTags(selectedTags.filter(filter => filter !== tag.title))} content={tag.title} color={tag.color} />)}
          </ul>
        </GetTaskFormContext.Provider>
        <input onClick={() => setPage(previousState => { return { ...previousState, taskFormOpen: false }})} type="button" value="Cancel" />
        <input onClick={reset} type="button" value="Reset" />
        <input onClick={submitForm} type="button" value="Submit" />
      </form>
    </>
  );
}

export default memo(TaskForm);
