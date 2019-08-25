import React from 'react';
import Card from 'react-bootstrap/Card'
import {getLocalizedText} from "../i18n";

const CoffeePanel = ({coffeeName, coffeeType, regions, language}) => (
    <>
        <Card>
            <Card.Body>
                <Card.Title>{getLocalizedText(language, "coffee-card-title")}:</Card.Title>
                <Card.Subtitle className="mb-3">{coffeeName}</Card.Subtitle>
                <Card.Text>{getLocalizedText(language, "coffee-type")}: {coffeeType}</Card.Text>
                <Card.Text>{getLocalizedText(language, "coffee-regions")}: {regions.join(', ')}</Card.Text>
            </Card.Body>
        </Card>
    </>
);

export default CoffeePanel;
