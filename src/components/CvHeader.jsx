import { Col, Container, Row } from "react-bootstrap"
import "../sass/components/_cvheader.scss";

const CvHeader = ({picture, firstname, lastname}) =>{
      return(
            <>
                  <Container>
                        <Row>
                              <Col className="imageContainer">
                                    <img src={picture} alt="Profile" />
                              </Col>
                              <Col className="nameTitle">
                                    <h1>{firstname + " " +lastname}</h1>
                              </Col>
                        </Row>
                  </Container>
            </>
      )
}

export default CvHeader;