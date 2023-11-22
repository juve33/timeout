import './Buttons.css';

function Tag({color, content}) {
  return (
    <li className={color}>
      {content}
    </li>
  );
}

export default Tag;
