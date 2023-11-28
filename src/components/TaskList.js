import React from 'react';

import './AppLists.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, children } = this.props;
    return (
      <ul className={"tasks " + color}>
        {children}
      </ul>
    );
  }
}

export default TaskList;
