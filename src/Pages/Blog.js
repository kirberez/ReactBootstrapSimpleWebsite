import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import axios from "axios";
import BlogPost from "../Components/BlogPost";


export default function Blog() {
  const URL = 'https://newsapi.org/v2/top-headlines';
  const TOKEN = '2b4604bfbde2401fb41d712107c63c37';

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true) // Пока мы подгружаем данные - true

  useEffect( () => {
    if (fetching) {   
      axios.get(`${URL}?pageSize=5&page=${currentPage}&country=us&apiKey=${TOKEN}`)
        .then(
          response => {
            setPosts([...posts, ...response.data.articles])
            setCurrentPage(prevState => prevState + 1)
          }
        )
        .finally(() => setFetching(false));
    }
  }, [fetching]) // Состояние отрабатывается когда меняется fetching

  useEffect( () => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [] )

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
      setFetching(true)
  }

  return (
    <Container>
      <Row >
        <Col md="9" xs={{ order: 2 }} sm={{ order: 1 }}>
          <BlogPost posts={posts} />
        </Col>
        <Col md="3" xs={{ order: 1 }} sm={{ order: 2 }}>
          <div>
            <Card className="mt-5">
              <h5 className="text-center">Categories</h5>
              <ListGroup variant="flush">
                <ListGroupItem>HTML/CSS</ListGroupItem>
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>Python</ListGroupItem>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>SQL</ListGroupItem>
              </ListGroup>
            </Card>
            
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a aliquam earum sunt, sed dicta ea quo omnis nam illo voluptate nesciunt possimus! Debitis, non eaque!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </Col>
      </Row>
    </Container>
  )
}