import React from 'react';

import './AppLists.css';

class FolderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: "false" };
    this.toggleElement = this.toggleElement.bind(this);
  }

  render() {
    const { color, children } = this.props;
    return (
      <ul enabled={this.state.enabled} onClick={this.toggleElement} className={"folders " + color}>
        {children}
      </ul>
    );
  }

  toggleElement() {
    if (this.state.enabled == "false") {
      this.setState({ enabled: "true"});
    } else {
      this.setState({ enabled: "false"});
    }
  }
}

export default FolderList;
