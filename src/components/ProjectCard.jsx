//use bootstrap to make cards
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
// import Catmix from "../assets/Catmix.jpg";
import { useState } from "react";
import Catmix2 from "../assets/Catmix2.png";
//
export default function ProjectCard() {
  const [slides, setSlides] = useState([]);

  // const projectOne = [
  //   { id: 1, image: Catmix },
  //   { id: 2, image: Catmix2 },
  // ];

  // const projects = [
  //   //test for object in an object
  //   {
  //     id: 1,
  //     name: project1,
  //     image: "hi",
  //     image: "hello",
  //   },
  // ];

  //plan
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
