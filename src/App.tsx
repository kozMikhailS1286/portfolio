import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Find from "./find/Find";
import Contacts from "./contakts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Works />
            <Find />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
