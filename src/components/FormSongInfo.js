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

        axios.post(' https://cors-everywhere.herokuapp.com/http://13.37.217.48:8000/songs/', song)
            .then(response => {
                console.log('Similar Songs:', response.data);
                alert('Similar songs found successfully!');
                setResults(response.data)
                // Optionally, process and display the similar songs data here
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to find similar songs');
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
