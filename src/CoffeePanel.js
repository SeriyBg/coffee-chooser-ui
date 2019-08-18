import React from 'react';
import Card from 'react-bootstrap/Card'

const CoffeePanel = ({coffeeName, coffeeType, regions}) => (
    <>
        <Card>
            <Card.Body>
                <Card.Title>Your coffee of the day:</Card.Title>
                <Card.Subtitle className="mb-3">{coffeeName}</Card.Subtitle>
                <Card.Text>Type: {coffeeType}</Card.Text>
                <Card.Text>Regions: {regions.join(', ')}</Card.Text>
            </Card.Body>
        </Card>
    </>
);

export default CoffeePanel;
