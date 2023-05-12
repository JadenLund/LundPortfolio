import Image from "react-bootstrap/Image";
import ProfileIcon from "../assets/ProfileIcon.png";
import resume from "../assets/resume.png";
import { Col, Row, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src={resume} width={200} />
        </Col>
        <Col>
          <h1>Jaden Lund</h1> <h3>Front-End Software Developer</h3>
        </Col>
        <Col>
          <Image width={200} src={ProfileIcon} />
        </Col>
      </Row>
    </Container>
  );
}
