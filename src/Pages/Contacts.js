import React, { Component } from "react";
import { Container, Form, Button, FloatingLabel, FormControl } from "react-bootstrap";


export default class Contacts extends Component {
  render() {
    return (
      <Container className="col-6 mt-3">
        <h1 className="text-center">Contact us</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Label>Comment (optional)</Form.Label>
          <FloatingLabel 
            controlId="floatingTextarea"
            // label="Comments"
            className="mb-3"
          >
            <FormControl 
              as="textarea"
              label="Comments"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}