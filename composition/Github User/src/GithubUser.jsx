import React, { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
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
        {user && (
            <>
                <img src={user.avatar_url} />
                <div>{user.login}</div>
                <div>{user.name}</div>
            </>
        )}
        {error && <div>{error.message}</div>}
        {loading && <div>Loading...</div>}
    </div>
    );
};

export default GithubUser;
