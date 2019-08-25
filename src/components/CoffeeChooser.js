import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import CoffeePanel from "./CoffeePanel";
import axios from "axios";
import {connect} from "react-redux";
import {getLocalizedText} from '../i18n';

class CoffeeChooser extends Component {

    constructor(props) {
        super(props);
        this.handlerButton = this.handlerButton.bind(this)
        this.state = {coffeeName: '', coffeeType: '', regions: []}
    }

    handlerButton() {
        axios.get('/coffee', {headers: {'content-language': this.props.language}}).then(res => {
            this.setState({coffeeName: res.data.name, coffeeType: res.data.type, regions: res.data.regions})
        }).then(d => console.log(this.state))
    }

    render() {
        return (
            <>
                <Button
                    onClick={this.handlerButton}
                    variant="outline-info">
                    {getLocalizedText(this.props.language, "coffee-choose-button")}
                </Button>
                <p/>
                <CoffeePanel
                    coffeeName={this.state.coffeeName}
                    coffeeType={this.state.coffeeType}
                    regions={this.state.regions}
                    language={this.props.language}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    language: state.languages.filter(item => item.active)[0].id,
});

export default connect(mapStateToProps, null)(CoffeeChooser);