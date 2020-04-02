import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Greeting/Main";
import Skills from "./Skills/Skills";
import Projects from "./Work/Projects";
import Slogan from "./Offers/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <div className="portfolio">
            <Header />
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
            </div>
        </div>
    );
}

export default App;
