import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";

function LanguageSelect({languages}) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="language-select">
                Language
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {languages.map(function (item, index) {
                    return <Dropdown.Item key={index} active={item.active}>{item.lang}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSelect;