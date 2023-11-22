import React from 'react';

import './AppLists.css';

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: "false" };
    this.toggleElement = this.toggleElement.bind(this);
  }

  render() {
    const { color, children } = this.props;
    return (
      <ul enabled={this.state.enabled} className={"tags " + color}>
      <h2 onClick={this.toggleElement}>Tags</h2>
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

export default TagList;
