import React, { useState } from 'react';
import axios from 'axios';

function FormUserInfo() {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert age to an integer
        const userData = {
            ...user,
            age: parseInt(user.age, 10)
        };

        axios.post('https://cors-everywhere.herokuapp.com/http://13.37.217.48:8000/register/', userData)
            .then(response => {
                console.log('Success:', response.data);
                alert(response.data.message);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to register user');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={user.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={user.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Register User</button>
        </form>
    );
};

export default FormUserInfo;
