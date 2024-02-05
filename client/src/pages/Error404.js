import { Link } from "react-router-dom";

import '../components/Buttons.css';

function Error404({children}) {

  return (
    <>
      <h1>Error 404 - Page Not Found</h1>
      <Link to="/">
        <button>Back to Start</button>
      </Link>
      {children}
    </>
  );
}

export default Error404;
