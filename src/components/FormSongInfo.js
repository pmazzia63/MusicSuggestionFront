import React, { useState, useEffect } from 'react';
import Data from '../data/big_dict.json';

function FormSongInfo() {
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [artistSongs, setArtistSongs] = useState([]);

    useEffect(() => {
        if (song.length > 1) {
            const filteredSongs = Object.keys(Data.songs)
                .filter(songName => songName.toLowerCase().includes(song.toLowerCase()))
                .map(filteredName => ({
                    name: filteredName,
                    artist: Data.songs[filteredName]
                }));

            setSuggestions(filteredSongs);
        } else {
            setSuggestions([]);
        }
    }, [song]);

    useEffect(() => {
        if (artist.length > 1) {
            const songsByArtist = Data.artist[artist]?.map(songName => ({
                name: songName,
                artist: artist
            })) || [];
            
            setArtistSongs(songsByArtist);
        } else {
            setArtistSongs([]);
        }
    }, [artist]);

    const handleSearchSong = (e) => {
        const query = e.target.value;
        setSong(query);
    };

    const handleSearchArtist = (e) => {
        const query = e.target.value;
        setArtist(query);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyez la chanson ou l'artiste sélectionné
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Chercher une chanson"
                    value={song}
                    onChange={handleSearchSong}
                />
                <ul>
                    {suggestions.map((item, index) => (
                        <li key={index} onClick={() => setSong(item.name)}>
                            {item.name} - {item.artist}
                        </li>
                    ))}
                </ul>
                <button type="submit">Envoyer</button>
            </form>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Chercher un artiste"
                    value={artist}
                    onChange={handleSearchArtist}
                />
                <ul>
                    {artistSongs.map((item, index) => (
                        <li key={index} onClick={() => setSong(item.name)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default FormSongInfo;
