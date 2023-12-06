import { useContext } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';

import './Forms.css';

function TaskForm(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  const submitForm = () => {
    setPage(previousState => { return { ...previousState, taskFormOpen: false }});
  }
  const cancelForm = () => {
    setPage(previousState => { return { ...previousState, taskFormOpen: false }});
  }

  return (
    <>
      <form enabled={getPage.taskFormOpen.toString()} className="task-form">
        <h2>{props.title}</h2>
        <label>
          Description:
          <input type="text" placeholder="make homework" />
        </label>
        <input onClick={cancelForm} type="button" value="Cancel" />
        <input onClick={submitForm} type="button" value="Submit" />
      </form>
    </>
  );
}

export default TaskForm;
