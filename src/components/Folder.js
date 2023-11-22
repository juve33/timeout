import './Folder.css';

function Folder({color, content}) {
  return (
    <li className={"card " + color}>
      {content}
    </li>
  );
}

export default Folder;
