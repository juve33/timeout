import { React, createContext, useState, memo } from 'react';

import Nav from './includes/Nav';
import Header from './includes/Header';
import Footer from './includes/Footer';

import './main.css';

export const GetPageContext = createContext();
export const SetPageContext = createContext();

function Layout({children}) {

  const [pageState, setPageState] = useState({
    menuOpen: false
  });

  return (
    <GetPageContext.Provider value={pageState}>
      <SetPageContext.Provider value={setPageState}>
        <Nav />
        <main>
          <Header />
          {children}
        </main>
        <Footer />
      </SetPageContext.Provider>
    </GetPageContext.Provider>
  );
}

export default memo(Layout);
