import React, {Component} from 'react';
import LanguageSelect from "./LanguageSelect";
import {connect} from "react-redux";
import {changeLanguage} from "../actions";

class LanguageComponent extends Component {

    render() {
        return (
            <LanguageSelect languages={this.props.languages} onChange={this.props.changeLanguage}/>
        );
    }
}

const mapStateToProps = (state) => ({
    languages: state.languages,
});

const mapDispatchToProps = {
    changeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageComponent);