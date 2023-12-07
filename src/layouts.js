import { React, createContext, useState, memo } from 'react';

import Nav from './includes/Nav';
import Header from './includes/Header';
import Footer from './includes/Footer';

import './main.css';

export const GetPageContext = createContext();
export const SetPageContext = createContext();
export const defaultPageState = {
  loginState: 0,
  menuOpen: false,
  taskFormOpen: false,
  taskFormTitle: ""
};

function Layout({children}) {

  const [pageState, setPageState] = useState(defaultPageState);

  return (
    <GetPageContext.Provider value={pageState}>
      <SetPageContext.Provider value={setPageState}>
        <Nav />
        <main>
          <Header />
          <div className="wrapper">
            {children}
          </div>
        </main>
        <Footer />
      </SetPageContext.Provider>
    </GetPageContext.Provider>
  );
}

export default memo(Layout);
