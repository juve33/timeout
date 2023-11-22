import '../components/Buttons.css';

function StartPage({children}) {
  return (
    <div className="wrapper">
      <h1>Startseite</h1>
      {children}
    </div>
  );
}

export default StartPage;
