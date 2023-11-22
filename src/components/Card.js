import './Card.css';

function Card({color, content}) {
  return (
    <div className={"card " + color}>
      {content}
    </div>
  );
}

export default Card;
