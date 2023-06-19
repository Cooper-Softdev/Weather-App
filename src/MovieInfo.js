import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';


function MovieInfo(props) {
  return (
    <Accordion defaultActiveKey="1" className="accordion-top">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.cityName}</Accordion.Header>
        <Accordion.Body>
          <div className="movieInfoContainer">
            <div className="carousel-container">
              <Carousel interval={5000} className="carousel-upwards">
                {props.data.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div className="movie-info">
                      <img src={`https://image.tmdb.org/t/p/original${item.poster}`} alt={item.name} className="movie-image" />
                      <div className="movie-caption">
                        <h3>{item.name}</h3>
                        <p>
                          Average Rating: {item.rating} <br />
                          {item.overview}
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MovieInfo;


