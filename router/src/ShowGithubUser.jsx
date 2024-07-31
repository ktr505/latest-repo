import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowGithubUser = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
    
    return () => setUserData(null);
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, login, avatar_url: avatarUrl } = userData;

  return (
    <div>
      <img src={avatarUrl} alt={name} style={{ width: '100px', height: '100px' }} />
      <div>{login}</div>
      <div>{name}</div>
    </div>
  );
};

export default ShowGithubUser;
