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

const data_items = jsonData.items;
export const filters = filtersJSON;

export const GetFilterContext = createContext();
export const SetFilterContext = createContext();

function App() {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleTaskForm = () => {
    setPage(previousState => {
      return { ...previousState, taskFormOpen: !(getPage.taskFormOpen), taskFormTitle: "Add Task" }
    });
  }

  return (
    <>
      <GetFilterContext.Provider value={activeFilters}>
        <SetFilterContext.Provider value={setActiveFilters}>
          <DropdownList title="folders">
            {filters.folders.map((folder) => <DropdownListItem key={folder.id} content={folder.title} color={folder.color} />)}
          </DropdownList>
          <DropdownList title="tags">
            {filters.tags.map((tag) => <DropdownListItem key={tag.id} content={tag.title} color={tag.color} />)}
          </DropdownList>
          <TaskList title={activeFilters[0]}>
            {data_items.map((content) => (
              <Task items={content} type="" />
            ))}
          </TaskList>
          <TaskForm title={getPage.taskFormTitle} />
        </SetFilterContext.Provider>
      </GetFilterContext.Provider>
      <div onClick={toggleTaskForm} className="add">+</div>
    </>
  );
}

export default memo(App);
