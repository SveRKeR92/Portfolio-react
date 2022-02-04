import {Container, Row } from "react-bootstrap"

const GradeCard = ({name, year}) =>{
      return(
            <>
                  <Container>
                        <Row>
                              <div>
                                    <h3>{name}</h3>
                                    <span>{year}</span>
                              </div>
                        </Row>
                  </Container>
            </>
      )
}

export default GradeCard;