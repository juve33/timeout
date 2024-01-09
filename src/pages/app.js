import { React, createContext, useContext, useState, memo } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';

import DropdownList from '../components/DropdownList';
import DropdownListItem from '../components/DropdownListItem';

import jsonData from '../dummydata.json';
import filtersJSON from '../filters.json';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';

import './app.css';

const tasksData = jsonData.items;
export const filters = filtersJSON;

export const GetFilterContext = createContext();
export const SetFilterContext = createContext();

function App() {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);
  const [activeFolders, setActiveFolders] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [tasks, setTasks] = useState(tasksData);

  const toggleTaskForm = () => {
    setPage(previousState => {
      return { ...previousState, taskFormOpen: !(getPage.taskFormOpen), taskFormTitle: "Add Task" }
    });
  }

  const addTask = (description, date, folder, tags) => {
    let _newTask = {
        "id": tasks.length,
        "title": description,
        "tags": tags,
        "type": folder,
        "date": date
    };
    setTasks([...tasks,_newTask]);
  }

  return (
    <>
      <GetFilterContext.Provider value={activeFolders}>
        <SetFilterContext.Provider value={setActiveFolders}>
          <DropdownList title="folders">
            {filters.folders.map((folder) => <DropdownListItem key={folder.id} content={folder.title} color={folder.color} />)}
          </DropdownList>
        </SetFilterContext.Provider>
      </GetFilterContext.Provider>

      <GetFilterContext.Provider value={activeTags}>
        <SetFilterContext.Provider value={setActiveTags}>
          <DropdownList title="tags">
            {filters.tags.map((tag) => <DropdownListItem key={tag.id} content={tag.title} color={tag.color} />)}
          </DropdownList>
        </SetFilterContext.Provider>
      </GetFilterContext.Provider>

      <GetFilterContext.Provider value={[activeFolders, activeTags]}>
        <SetFilterContext.Provider value={[setActiveFolders, setActiveTags]}>
          <TaskList title={(activeTags[0]) ? ("#" + activeTags[0]) : activeFolders[0]}>
            {tasks.map((content) => (
              <Task items={content} type="" />
            ))}
          </TaskList>
        </SetFilterContext.Provider>
      </GetFilterContext.Provider>

      <TaskForm title={getPage.taskFormTitle} onAddTask={addTask} />
      <div onClick={toggleTaskForm} className="add" title="Add Task">+</div>
    </>
  );
}

export default memo(App);
