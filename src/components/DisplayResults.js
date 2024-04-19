import React from 'react';
function DisplayResults({ results }) {
    const artists = results.artists || {};
    const trackNames = results.track_name || {};

    return (
        <div>
            <h1>Résultats</h1>
            <ul>
                {Object.keys(artists).map((key) => (
                    <li key={key}>
                        Artist: {artists[key]}, Track Name: {trackNames[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayResults;
