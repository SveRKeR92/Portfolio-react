import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/components/_cv.scss";
import MyCv from '../data/cv.json'
import CvHeader from "../components/CvHeader";
import { Row, Col, Container } from "react-bootstrap";
import ExperienceCard from "../components/ExperienceCard";
import SkillCard from "../components/SkillCard";

const mycv = MyCv.cv;

const Cv = () => {
  return (
    <>
      {console.log(mycv)}
      <Navbar />
      <section id="cv">
        <CvHeader picture={mycv.picture} firstname={mycv.infos.firstname} lastname={mycv.infos.lastname}/>
        <p className="bio">{mycv.bio}</p>
        <Container>
          <Row>
            <Col>
              <h2>My experiences</h2>
              {mycv.experiences.map((data, index) =>
                <div key={index}>
                  <ExperienceCard job={data.job} company={data.company} duration={data.duration} missions={data.missions} />
                </div>
              )}
            </Col>
            <Col>
              {mycv.skills.map((data, index) =>
              <div key={index}>
                <SkillCard name={data.name} level={data.level}/>
              </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
};

export default Cv;
