import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import sampleImage from "../images/image_002.jpg"

function BlogItem() {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={sampleImage} />
      <Card.Body>
        <Card.Title>ブログタイトル</Card.Title>
        <Card.Text>2020/08/19</Card.Text>
      </Card.Body>
      <Link to="">See more</Link>
    </Card>
  )
}

export default BlogItem
