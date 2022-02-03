import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/components/_projets.scss";
import Projects from '../data/projects.json';
import ProjectCard from "../components/ProjectCard";
import { CardGroup } from "react-bootstrap";

const allProjects = Projects.projects;

const Projets = () => {
  return (
    <>
      <Navbar />
      <section id="projets">
        <h1>Projets</h1>
        <CardGroup>
        {
          allProjects.map((data, index) => 
          <div key={index}>
              <ProjectCard title={data.projectTitle} desc={data.projectDesc} url={data.projectUrl} image={data.projectImages[0]} />
            </div>
          )
        }
        </CardGroup>
      </section>
      <Footer />
    </>
  );
};

export default Projets;
