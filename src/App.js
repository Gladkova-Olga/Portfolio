import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./project/Projects";
import Freelance from "./freelance/Freelance";
import Contacts from "./contacts/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
