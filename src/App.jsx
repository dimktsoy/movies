import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Page from './layout/Page';
import PageHeader from './layout/PageHeader';
import PageFooter from './layout/PageFooter';
import PageContent from './layout/PageContent';
import HomePage from './pages/Home';
import MoviePage from './pages/Movie';

function App() {
  return (
    <Page>
      <PageHeader />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:movieID" element={<MoviePage />} />
        </Routes>
      </PageContent>
      <PageFooter />
    </Page>
  );
}

export default App;
