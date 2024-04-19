import React from 'react';
import FormUserInfo from './components/FormUserInfo';
import FormSongInfo from './components/FormSongInfo';
import DisplayResults from './components/DisplayResults';
import './App.css';

function App() {
    return (
        <div className="App">
            <FormUserInfo />
            <FormSongInfo />
            <DisplayResults />
        </div>
    );
}

export default App;
