import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/components/_cv.scss";
import MyCv from '../data/cv.json'
import CvHeader from "../components/CvHeader";
import { Row, Col, Container } from "react-bootstrap";
import ExperienceCard from "../components/ExperienceCard";
import SkillCard from "../components/SkillCard";
import StudyCard from "../components/StudyCard";
import GradeCard from "../components/GradeCard";

const mycv = MyCv.cv;

const Cv = () => {
  return (
    <>
      {console.log(mycv)}
      <Navbar />
      <section id="cv">
        <CvHeader picture={mycv.picture} firstname={mycv.infos.firstname} lastname={mycv.infos.lastname}/>
        
        <Container>
          <Row className="row">
            <h2>Bio</h2>
            <p>{mycv.bio}</p>
          </Row>
          <Row className="row">
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
          <Row className="row">
            <Col>
              <h2>Studies</h2>
              {mycv.studies.map((data, index) =>
                <div key={index}>
                  <StudyCard school={data.school} year={data.year} speciality={data.speciality} />
                </div>
              )}
            </Col>
            <Col>
              <h2>Graduations</h2>
              {mycv.graduations.map((data, index) =>
              <div key={index}>
                <GradeCard name={data.name} year={data.year}/>
              </div>
              )}
            </Col>
          </Row>
        </Container>
        {/* Container End */}


      </section>
      <Footer/>
    </>
  );
};

export default Cv;
