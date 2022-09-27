import React, { Component } from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-3 ">
            <Card>
              <Card.Img 
                variant="top"
                src="https://www.scnsoft.com/web-development-team_1.png" 
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed id, necessitatibus in vitae nam, libero fuga.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
                variant="top"
                src="https://www.scnsoft.com/web-development-team_1.png" 
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed id, necessitatibus in vitae nam, libero fuga.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
                variant="top"
                src="https://www.scnsoft.com/web-development-team_1.png" 
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed id, necessitatibus in vitae nam, libero fuga.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}