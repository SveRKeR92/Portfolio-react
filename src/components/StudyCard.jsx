import {Container, Row } from "react-bootstrap"

const StudyCard = ({school, year, speciality}) =>{
      return(
            <>
                  <Container>
                        <Row>
                              <div>
                                    <h3>{school}</h3>
                                    <span>{year}</span>
                                    <p>{speciality}</p>
                              </div>
                        </Row>
                  </Container>
            </>
      )
}

export default StudyCard;