import { useContext, memo } from 'react';
import { GetFilterContext, SetFilterContext } from '../pages/app';

import './Folder.css';
import './Buttons.css';

function DropdownListItem(props) {

  const getFilters = useContext(GetFilterContext);
  const setFilters = useContext(SetFilterContext);

  const enable = () => {
    setFilters([props.content]);
  }

  const disable = () => {
    setFilters([]);
  }

  if (getFilters[0] === props.content) {
    return (
      <li enabled="true" onClick={disable} className={props.color}>
        {props.content}
      </li>
    );
  } else {
    return (
      <li enabled="false" onClick={enable} className={props.color}>
        {props.content}
      </li>
    );
  }
}

export default memo(DropdownListItem);
