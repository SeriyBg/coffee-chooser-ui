import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";

function LanguageSelect({languages, onChange}) {
    return (
        <Dropdown onSelect={(eventKey, event) => onChange(eventKey)}>
            <Dropdown.Toggle variant="success" id="language-select">
                Language
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {languages.map(function (item, index) {
                    return <Dropdown.Item
                        key={index}
                        eventKey={item.id}
                        active={item.active}>{item.lang}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSelect;