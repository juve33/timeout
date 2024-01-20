import Layout from './layouts';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './content';

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
  <React.StrictMode>
    <Layout>
      <Content />
    </Layout>
  </React.StrictMode>
);
