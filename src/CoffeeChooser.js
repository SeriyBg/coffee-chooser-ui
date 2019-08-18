import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import CoffeePanel from "./CoffeePanel";
import axios from "axios";

class CoffeeChooser extends Component {

    constructor(props) {
        super(props);
        this.handlerButton = this.handlerButton.bind(this)
        this.state = {coffeeName: '', coffeeType: '', regions: []}
    }

    handlerButton() {
        axios.get('/coffee').then(res => {
            this.setState({coffeeName: res.data.name, coffeeType: res.data.type, regions: res.data.regions})
        }).then(d => console.log(this.state))
    }

    render() {
        return (
            <>
                <Button
                    onClick={this.handlerButton}
                    variant="outline-info">
                    What coffee should I drink today?
                </Button>
                <p/>
                <CoffeePanel
                    coffeeName={this.state.coffeeName}
                    coffeeType={this.state.coffeeType}
                    regions={this.state.regions}/>
            </>
        );
    }
}

export default CoffeeChooser;