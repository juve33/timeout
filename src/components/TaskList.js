import React from 'react';

import './AppLists.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, color, children } = this.props;
    return (
      <ul className={"tasks " + color}>
        <h2>{ title }</h2>
        {children}
      </ul>
    );
  }
}

export default TaskList;
