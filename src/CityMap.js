import React from 'react';
import { Accordion } from 'react-bootstrap';

function CityMap(props) {
  
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.cityName}</Accordion.Header>
        <Accordion.Body>
          <img src={props.mapURL} alt="Map of the City"/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CityMap;
