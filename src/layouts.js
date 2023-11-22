import Nav from './includes/Nav';
import Header from './includes/Header';
import Footer from './includes/Footer';

import './main.css';

function Layout({children}) {
  return (
    <>
      <Nav />
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
