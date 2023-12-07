import { useContext, memo } from 'react';
import { GetFilterContext, SetFilterContext } from '../pages/app';

import './Folder.css';
import './Buttons.css';

function DropdownListItem(props) {

  const getFilters = useContext(GetFilterContext);
  const setFilters = useContext(SetFilterContext);

  const enable = () => {
    setFilters([...getFilters,props.content]);
  }

  const disable = () => {
    setFilters(
      getFilters.filter(filter => filter !== props.content)
    );
  }

  if (getFilters.includes(props.content)) {
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
