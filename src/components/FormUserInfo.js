import React, { useState } from 'react';

function FormUserInfo() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Ici, envoyez une requête POST à votre API
        const response = await fetch('URL_DE_VOTRE_API', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prenom, nom, age })
        });

        const data = await response.json();
        console.log(data); // Traitez les données reçues si nécessaire
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
            <input type="number" placeholder="Âge" value={age} onChange={(e) => setAge(e.target.value)} />
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default FormUserInfo;
