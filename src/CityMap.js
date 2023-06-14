import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';

function CityMap(props) {
  const [mapOpen, setMapOpen] = useState(false);

  const handleToggleMap = () => {
    setMapOpen(!mapOpen);
  };

  return (
    <div>
      <Button onClick={handleToggleMap}>
        City Map
      </Button>
      <br />
      <Card className="cityMap" expanded={mapOpen}>
        <Card.Collapse>
          <Card.Img src={props.mapURL} fluid alt="City Map" />
        </Card.Collapse>
      </Card>
    </div>
  );
}

export default CityMap;




