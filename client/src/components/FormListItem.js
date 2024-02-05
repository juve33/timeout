import { useContext } from 'react';
import { GetTaskFormContext } from './TaskForm';

import './Folder.css';
import './Buttons.css';

function FormListItem(props) {

  const getFilters = useContext(GetTaskFormContext);

  if (getFilters.includes(props.content)) {
    return (
      <li enabled="true" onClick={props.disable} className={props.color}>
        {props.content}
      </li>
    );
  } else {
    return (
      <li enabled="false" onClick={props.enable} className={props.color}>
        {props.content}
      </li>
    );
  }
}

export default FormListItem;
