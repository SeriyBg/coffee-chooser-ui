import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import CoffeePanel from "./CoffeePanel";
import axios from "axios";
import {connect} from "react-redux";
import {getLocalizedText} from '../i18n';
import Alert from "react-bootstrap/Alert";

class CoffeeChooser extends Component {

    constructor(props) {
        super(props);
        this.handlerButton = this.handlerButton.bind(this)
        this.state = {coffeeName: '', coffeeType: '', regions: [], error: false}
    }

    handlerButton() {
        axios.get('/coffee', {headers: {'content-language': this.props.language}}).then(res => {
            this.setState({coffeeName: res.data.name, coffeeType: res.data.type, regions: res.data.regions, error: false})
        }, error => this.setState({error: true}))
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
                {
                    this.state.error
                        ? <Alert variant="danger">{getLocalizedText(this.props.language, "request-error")}</Alert>
                        : <CoffeePanel
                            coffeeName={this.state.coffeeName}
                            coffeeType={this.state.coffeeType}
                            regions={this.state.regions}
                            language={this.props.language}/>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    language: state.languages.filter(item => item.active)[0].id,
});

export default connect(mapStateToProps, null)(CoffeeChooser);