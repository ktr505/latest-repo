import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ShowGithubUser from './ShowGithubUser';
import Welcome from './welcome';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome name="User" />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
