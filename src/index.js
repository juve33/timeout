import Layout from './layouts';

import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginApp from './loginapp';

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
  <React.StrictMode>
    <Layout>
      <LoginApp />
    </Layout>
  </React.StrictMode>
);
