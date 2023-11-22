import './overview.css';

function Overview({children}) {
  return (
    <div className="wrapper">
      {children}
      <div className="add">+</div>
    </div>
  );
}

export default Overview;
