import { useContext } from 'react';
import { GetFilterContext, SetFilterContext } from '../pages/app';

import './AppLists.css';

function TaskList(props) {

  const getFilters = useContext(GetFilterContext);
  const setFilters = useContext(SetFilterContext);

  return (
    <>
      <h2 enabled={((getFilters[0].length !== 0) || (getFilters[1].length !== 0)).toString()} onClick={() => {setFilters[0]([]);setFilters[1]([]);}} className={"tasks"}>{props.title}</h2>
      <ul enabled={((getFilters[0].length !== 0) || (getFilters[1].length !== 0)).toString()} className={"tasks " + props.color}>
        {props.children}
      </ul>
    </>
  );
}

export default TaskList;
