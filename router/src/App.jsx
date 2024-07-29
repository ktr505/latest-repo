import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './welcome';
import { Counter } from './Counter';
import GithubUser from './GithubUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Alice" />} />
        <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1} />} />
        <Route path="/users/:username" element={<GithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
