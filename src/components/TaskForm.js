import { useState } from 'react';

import './Forms.css';

function TaskForm(props) {

  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <form enabled={enabled.toString()} className="task-form">
      </form>
    </>
  );
}

export default TaskForm;
