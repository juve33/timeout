import React from 'react';

import './Folder.css';

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: "false" };
    this.toggleElement = this.toggleElement.bind(this);
  }

  render() {
    const { color, content } = this.props;
    return (
      <li enabled={this.state.enabled} onClick={this.toggleElement} className={"card " + color}>
        {content}
      </li>
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

export default Folder;
