import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Find from "./find/Find";
import Contacts from "./contakts/Contacts";
import Footer from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Find />
            <Contacts />
            <Footer />
        </div>
    );
}

// https://preview.themeforest.net/item/jeffrey-personal-portfolio-template/full_screen_preview/24187700?_ga=2.210649365.14007170.1690023128-1179667776.1690023128
// or second:
// https://themeforest.net/item/drake-personal-portfolio-html/43789350

export default App;
