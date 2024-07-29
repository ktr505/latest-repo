import React from 'react';

const Welcome = ({ name = "Guest" }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>Try visiting <code>/users/ktr505</code> in the search bar to see a GitHub user's profile!</p>
    </div>
  );
};

export default Welcome;
