//use bootstrap to make cards
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useState } from "react";
export default function ProjectCard() {
  const [slides, setSlides] = useState([]);

  /* Set it so that the slides is an array, and each image is mapped out for each slide? */
  return (
    <>
      <Carousel>
        {/* //for every slide map out a carosel Item */}
        {projectOne.map((project) => (
          <Carousel.Item>
            <img src={project.image} alt={JSON.stringify(project.name)} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </>
  );
}
