import React from 'react';

import './AppLists.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
    this.disableElement = this.disableElement.bind(this);
  }

  render() {
    const { title, color, children } = this.props;
    return (
      <>
        <h2 enabled={this.state.enabled.toString()} onClick={this.disableElement} className={"tasks"}>{title}</h2>
        <ul enabled={this.state.enabled.toString()} className={"tasks " + color}>
          {children}
        </ul>
      </>
    );
  }

  disableElement() {
    this.setState({ enabled: false});
  }
}

export default TaskList;
