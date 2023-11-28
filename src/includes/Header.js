import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: true };
    this.toggleNav = this.toggleNav.bind(this);
  }

  render() {
    const { color } = this.props;
    return (
      <header className={color}>
        <div onClick={this.toggleNav} className="menu">
          &#x2261;
        </div>
        TimeOut
      </header>
    );
  }

  toggleNav() {
    const nav = document.getElementById("nav");
    this.setState({ enabled: !this.state.enabled});
    nav.setAttribute("enabled", this.state.enabled.toString());
  }
}

export default Header;
