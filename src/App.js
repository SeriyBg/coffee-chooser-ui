import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import CoffeeChooser from "./CoffeeChooser";
import LanguageSelect from "./LanguageSelect";

function App() {
    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Coffee chooser</Navbar.Brand>
                <LanguageSelect
                    languages={[{lang: "English", active: true}, {lang: "Українська", active: false}]}/>
            </Navbar>
            <Jumbotron>
                <Container>
                    <CoffeeChooser/>
                </Container>
            </Jumbotron>
        </>
    );
}

export default App;
