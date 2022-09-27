import { Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function BlogPost({posts}) {
  let key = 0;
  return posts.map(post => 
    <div className="d-flex align-items-conter mt-5 m-2" key={++key}>
      <Col sm={4} xs={3} className="d-flex align-items-center justify-content-center flex-shrink-0">
        <Image
          alt="Picture"
          thumbnail
          className="mr-3 img-fluid"
          src={post.urlToImage} 
        />
      </Col>
      <Col sm={8} xs={9} className="flex-grow-1 ms-3 text-break">
        <h5>{post.title}</h5>
        <p>
          {post.description}
        </p>
        <a href={post.url}>
          Ссылка на источник.
        </a>
      </Col>
    </div>
  )
}