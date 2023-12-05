import Toggleable from './Toggleable';

import './Folder.css';
import './Buttons.css';

class DropdownListItem extends Toggleable {
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
}

export default DropdownListItem;
