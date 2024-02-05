import { React, createContext, useContext, useState, memo } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';
import { useGetTasksQuery } from '../slices/tasksApiSlice';

import filtersJSON from '../filters.json';

import DropdownList from '../components/DropdownList';
import DropdownListItem from '../components/DropdownListItem';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';

import './app.css';

export const filters = filtersJSON;

export const GetFilterContext = createContext();
export const SetFilterContext = createContext();

function App() {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);
  const [activeFolders, setActiveFolders] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

  const {
    data: tasks,
    isSuccess,
    isError,
    error
  } = useGetTasksQuery(undefined, {
    pollingInterval: 20000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  let content;

  if (isSuccess) {
    const { ids } = tasks;
    content = ids?.length ? ids.map(taskId => <Task key={taskId} taskId={taskId} />) : null;
  }

  const toggleTaskForm = () => {
    setPage(previousState => {
      return { ...previousState, taskFormOpen: !(getPage.taskFormOpen), taskFormTitle: "Add Task" }
    });
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
            <p className={(isError ? 'hidden ' : '') + 'status'}>{error?.data?.message}</p>
            {content}
          </TaskList>
        </SetFilterContext.Provider>
      </GetFilterContext.Provider>

      <TaskForm title={getPage.taskFormTitle} />
      <div onClick={toggleTaskForm} className="add" title="Add Task">+</div>
    </>
  );
}

export default memo(App);
