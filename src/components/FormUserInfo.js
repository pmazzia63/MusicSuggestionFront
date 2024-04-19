import React, { useState } from 'react';

function FormUserInfo() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState(''); // Ajout de l'état pour l'email

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Envoyer une requête POST à l'API à l'adresse spécifiée avec l'email inclus
        const response = await fetch('http://13.37.217.48:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prenom, nom, age, email }) // Inclure l'email dans le corps de la requête
        });

        const data = await response.json();
        console.log(data); // Traitez les données reçues si nécessaire
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
            <input type="number" placeholder="Âge" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Champ pour l'email */}
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default FormUserInfo;
