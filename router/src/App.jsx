import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './welcome';
import { Counter } from './Counter';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/users">GitHub Users</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
