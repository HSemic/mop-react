import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/organisms/Navbar';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';

import VerticalSpacer from './components/atoms/VerticalSpacer';

const App = (): React.ReactElement => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <VerticalSpacer />
      <QuestionPage />
      <VerticalSpacer />
    </>
  );
};

export default App;
