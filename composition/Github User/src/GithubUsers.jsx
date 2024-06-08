import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setUsers(data.items);
            } else {
                throw new Error('Failed to fetch users');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <GithubUser username={user.login} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GithubUsers;
