import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import Projects from "../data/projects.json";
import { Container } from "react-bootstrap";
import "../sass/components/_singleproject.scss";
import { useEffect } from "react";

const Projet = () => {
  const slug = useParams();

  const theProject = Projects.projects[slug.id - 1];
  useEffect(() => {
    document.title = theProject.projectTitle;
  });

  return (
    <>
      {console.log(theProject)}
      <Navbar />
      <section id="projet">
        <Container>
          <div className="grid">
            <h1>{theProject.projectTitle}</h1>
            {theProject.projectImages.map((data, index) => (
              <div key={index}>
                <img src={data} alt={theProject.projectTitle} />
              </div>
            ))}
            <p>{theProject.projectDesc}</p>
            <Link to="/projets">Back to all projects</Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Projet;
