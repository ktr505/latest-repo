import React from 'react';

const Welcome = ({ name = 'Guest' }) => {
  return (
    <p>Welcome, {name}!</p>
  );
};

export default Welcome;
