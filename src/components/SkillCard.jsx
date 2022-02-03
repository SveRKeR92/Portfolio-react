import {Container, Row } from "react-bootstrap"
import '../sass/components/_cvSkillcard.scss'

const SkillCard = ({name, level}) =>{
      return(
            <>
                  <Container>
                        <Row>
                              <div>
                                    <h3>{name}</h3>
                                    <div className="bar">
                                          <div className="bar-percent" style={{width: level +"%"}}></div>
                                    </div>
                              </div>
                        </Row>
                  </Container>
            </>
      )
}

export default SkillCard;