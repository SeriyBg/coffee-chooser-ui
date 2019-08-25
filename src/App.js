import React, {Component} from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import CoffeeChooser from "./components/CoffeeChooser";
import LanguageComponent from "./components/LanguageComponent";

class App extends Component {

    render() {
        return (
            <>
                <Navbar bg="light">
                    <Navbar.Brand href="#">Coffee chooser</Navbar.Brand>
                    <LanguageComponent
                        languages={this.props.languages}/>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <CoffeeChooser/>
                    </Container>
                </Jumbotron>
            </>
        );
    }
}

export default App;
