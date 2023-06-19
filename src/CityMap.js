import React from 'react';
import { Accordion } from 'react-bootstrap';

function CityMap(props) {
  
  return (
    <Accordion defaultActiveKey="1" className="accordion-side">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.cityName}</Accordion.Header>
        <Accordion.Body>
        <img src={props.mapURL} alt="Map of the City" className="map-image" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CityMap;
