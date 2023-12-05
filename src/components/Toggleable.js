import React from 'react';

class Toggleable extends React.Component {
  toggleElement() {
    this.setState({ enabled: !this.state.enabled});
  }
}

export default Toggleable;
