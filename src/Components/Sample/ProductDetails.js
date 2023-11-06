import { Col, Row } from "react-bootstrap";
import Blog1 from "../BlogSection";
import Footer from "../Footer";

function Blog() {
  return (
    <>
      <Row>
        <Col lg={12}>
          <Blog1 />
        </Col>
        <Col lg={12}>
          <Footer />
        </Col>
      </Row>
    </>
  )
}
export default Blog