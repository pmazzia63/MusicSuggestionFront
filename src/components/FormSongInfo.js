import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../data/big_dict.json';

function FormSongInfo({ setResults }) {
    const [song, setSong] = useState({
        artist: '',
        track: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://13.37.217.48:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
            .then(response => response.json()) // Convert the response data to JSON
            .then(data => {
                console.log('Success:', data);
                alert(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to register user');
            });
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="artist">Artist:</label>
                <input
                    type="text"
                    id="artist"
                    name="artist"
                    value={song.artist}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="track">Track:</label>
                <input
                    type="text"
                    id="track"
                    name="track"
                    value={song.track}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Find Similar Songs</button>
        </form>
    );
};

export default FormSongInfo;
