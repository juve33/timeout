import { React, createContext, useContext, useState, useEffect, memo } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';

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
  const [tasks, setTasks] = useState([]);

  const toggleTaskForm = () => {
    setPage(previousState => {
      return { ...previousState, taskFormOpen: !(getPage.taskFormOpen), taskFormTitle: "Add Task" }
    });
  }

  const toggleTaskEdit = () => {
    setPage(previousState => {
      return { ...previousState, taskFormOpen: !(getPage.taskFormOpen), taskFormTitle: "Edit Task" }
    });
  }

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await fetch(`http://localhost:5000/record/`);
        const taskslist = await response.json();
        setTasks(taskslist);
      } catch(error) {
        const message = `Unable to load tasks from database: ${error}`;
        window.alert(message);
        return;
      }
    }
    getTasks();
    return;
 });

  async function deleteTask(value) {
    try {
      await fetch(`http://localhost:5000/${value.id}`, {
        method: "DELETE"
      });
      setTasks(oldValues => {
        return oldValues.filter(task => task !== value)
      });
    } catch(error) {
      const message = `Unable to delete task from database: ${error}`;
      window.alert(message);
      return;
    }
  }

  async function addTask(description, date, tags) {
    let _newTask = {
        "id": tasks.length,
        "title": description,
        "tags": tags,
        "date": date
    };
    try {
      await fetch(`http://localhost:5000/record/add`, {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
        },
        body: JSON.stringify(_newTask),
      });
    } catch(error) {
      const message = `Unable to add task to database: ${error}`;
      window.alert(message);
      return;
    }
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
              <Task key={content.id} item={content} onEdit={toggleTaskEdit} onDelete={() => deleteTask(content)} />
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
