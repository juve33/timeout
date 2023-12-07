import { useState } from 'react';

import './AppLists.css';

function DropdownList(props) {

  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <h2 enabled={enabled.toString()} onClick={() => setEnabled(!enabled)} className="dropdown-list">{props.title}</h2>
      <ul enabled={enabled.toString()} className={props.title + " " + props.color}>
        {props.children}
      </ul>
    </>
  );
}

export default DropdownList;
