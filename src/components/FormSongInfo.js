import React, { useState } from 'react';
import axios from 'axios';
import Data from '../data/big_dict.json';

function FormSongInfo({ setResults }) {
    const [song, setSong] = useState({
        artist: '',
        track: ''
    });
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong(prevState => ({
            ...prevState,
            [name]: value
        }));
        
        if (name === 'track') {
            const matches = Object.keys(Data.songs).filter(track =>
                track.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(matches);
        }
    };

    const handleSelect = (track) => {
        setSong(prevState => ({
            ...prevState,
            track,
            artist: Data.songs[track]
        }));
        setSuggestions([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://13.37.217.48:8000/songs/', song)
            .then(response => {
                console.log('Similar Songs:', response.data);
                alert('Similar songs found successfully!');
                setResults(response.data)
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
                    autoComplete="off"
                    required
                />
                {suggestions.length > 0 && (
                    <ul>
                        {suggestions.map((track, index) => (
                            <li key={index} onClick={() => handleSelect(track)}>
                                {track}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button type="submit">Find Similar Songs</button>
        </form>
    );
};

export default FormSongInfo;
