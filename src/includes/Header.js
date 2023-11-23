import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: "false" };
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
    if (this.state.enabled === "false") {
      nav.setAttribute("enabled", "true");
      this.setState({ enabled: "true"});
    } else {
      nav.setAttribute("enabled", "false");
      this.setState({ enabled: "false"});
    }
  }
}

export default Header;
