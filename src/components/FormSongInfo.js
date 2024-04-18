import React, { useState } from 'react';

function FormSongInfo() {
    const [song, setSong] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSong(query);
        // Implémentez la logique pour rechercher des suggestions
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Envoyez la chanson sélectionnée
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Chercher une chanson" value={song} onChange={handleSearch} />
            <ul>
                {suggestions.map((item, index) => (
                    <li key={index} onClick={() => setSong(item.name)}>
                        {item.name} - {item.artist}
                    </li>
                ))}
            </ul>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default FormSongInfo;
