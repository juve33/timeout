import React from 'react';

import './Folder.css';

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
    this.toggleElement = this.toggleElement.bind(this);
  }

  render() {
    const { color, content } = this.props;
    return (
      <li enabled={this.state.enabled.toString()} onClick={this.toggleElement} className={color}>
        {content}
      </li>
    );
  }

  toggleElement() {
    this.setState({ enabled: !this.state.enabled});
  }
}

export default Folder;
