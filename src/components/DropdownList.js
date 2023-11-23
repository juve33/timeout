import React from 'react';

import './AppLists.css';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: "true" };
    this.toggleElement = this.toggleElement.bind(this);
  }

  render() {
    const { title, color, children } = this.props;
    return (
      <>
        <h2 enabled={this.state.enabled} onClick={this.toggleElement} className={title}>{title}</h2>
        <ul enabled={this.state.enabled} className={title + " " + color}>
          {children}
        </ul>
      </>
    );
  }

  toggleElement() {
    if (this.state.enabled === "false") {
      this.setState({ enabled: "true"});
    } else {
      this.setState({ enabled: "false"});
    }
  }
}

export default DropdownList;
