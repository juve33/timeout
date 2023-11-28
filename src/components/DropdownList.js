import React from 'react';

import './AppLists.css';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: true };
    this.toggleElement = this.toggleElement.bind(this);
  }

  render() {
    const { title, color, children } = this.props;
    return (
      <>
        <h2 enabled={this.state.enabled.toString()} onClick={this.toggleElement} className={title}>{title}</h2>
        <ul enabled={this.state.enabled.toString()} className={title + " " + color}>
          {children}
        </ul>
      </>
    );
  }

  toggleElement() {
    this.setState({ enabled: !this.state.enabled});
  }
}

export default DropdownList;
