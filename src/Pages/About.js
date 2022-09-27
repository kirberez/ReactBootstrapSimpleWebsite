import React, { Component } from "react";
import { Container, TabContainer, Row, Col, Nav, Tab } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

export default class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="left-tabs-example" defaultActiveKey="second">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fivth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
              <Tab.Pane eventKey="first">
                  <Image  
                    alt="pic"
                    className="img-fluid"
                    src="https://mobios.school/images/02.07.2021/graphicDesignTips2.png"
                  />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>  
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Image
                    alt="pic"
                    className="img-fluid"
                    src="https://www.bairesdev.com/wp-content/uploads/2021/07/software-developing-team-1024x683.jpg" 
                  />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>  
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Image  
                    alt="pic"
                    className="img-fluid"
                    src="https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg"
                  />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>  
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Image  
                    alt="pic"
                    className="img-fluid"
                    src="https://d26pm0riky5t4b.cloudfront.net/image/file/5612c8f1-4c4b-477c-8471-987285169e6c.jpg"
                  />                    
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>  
                </Tab.Pane>
                <Tab.Pane eventKey="fivth">
                  <Image  
                    alt="pic"
                    className="img-fluid"
                    src="https://hackr.io/blog/top-javascript-libraries/thumbnail/large"
                  />                    
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis debitis eaque praesentium nostrum. Repellendus laboriosam est ea exercitationem, facilis saepe sequi optio dolorum tempora nesciunt quibusdam pariatur amet nisi?</p>  
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    )
  }
}