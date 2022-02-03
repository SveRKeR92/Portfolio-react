import {Container, Row } from "react-bootstrap"

const ExperienceCard = ({job, company, duration, missions}) =>{
      return(
            <>
                  <Container>
                        <Row>
                              <div>
                                    <h3>{job}</h3>
                                    <span>{company} - {duration}</span>
                                    <ul>
                                          {
                                                missions.map((data, index) => 
                                                <li key={index}>{data}</li>
                                                )
                                          }
                                    </ul>
                              </div>
                        </Row>
                  </Container>
            </>
      )
}

export default ExperienceCard;