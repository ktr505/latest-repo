import React, { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();

        return () => setUserData(null);
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (!userData) {
        return <div>No user data found</div>;
    }

    const { name, login, avatar_url: avatarUrl } = userData;

    return (
        <div>
            <img src={avatarUrl} alt={`${login}'s avatar`} />
            <div>{login}</div>
            <div>{name}</div>
        </div>
    );
};

export default GithubUser;
