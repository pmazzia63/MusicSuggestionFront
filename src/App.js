import React, { useState, useEffect } from 'react';
import FormUserInfo from './components/FormUserInfo';
import FormSongInfo from './components/FormSongInfo';
import DisplayResults from './components/DisplayResults';
// import axios from 'axios';

import './App.css';

function App() {
    const [results, setResults] = useState('');

    // // useEffect hook to run on component mount
    // useEffect(() => {
    //     // Action to perform on page refresh or initial load
    //     axios.post('http://13.37.217.48:8000/reset/', {})
    //         .then(response => {
    //             console.log('Success:', response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //             alert('Failed to register user');
    //         });

    //     // You can place any logic here that you want to execute on page refresh
    // }, []); // Empty dependency array means this runs only once when the component mounts

    return (
        <div className="App">
            <FormUserInfo />
            <FormSongInfo setResults={setResults} />
            <DisplayResults results={results} />
        </div>
    );
}

export default App;
