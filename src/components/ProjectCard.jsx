import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ProjectCard = ({title, desc, image, url}) => {
      return(
            <>
                  <Card style={{ width: '18rem' }}>
                        {/* Image is in public/img with ReactBootstrap */}
                        <Card.Img variant="top" src={image} /> 
                        <Card.Body>
                              <Card.Title>{title}</Card.Title>
                              <Card.Text>{desc}</Card.Text>
                                    <Link to={url}>
                                          <Button variant="primary">
                                                Check this out
                                          </Button>
                                    </Link>
                        </Card.Body>
                  </Card>
            </>
      )
}

export default ProjectCard;