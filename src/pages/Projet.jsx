import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import { Link, useParams } from "react-router-dom";
import Projects from '../data/projects.json';



const Projet = () => {

      const slug = useParams();

      const theProject = Projects.projects[slug.id-1];

      return(
            <>
                  {console.log(theProject)}
                  <Navbar/>
                  <section id="projet">
                        <h1>{theProject.projectTitle}</h1>
                        {theProject.projectImages.map((data, index) => 
                              <div key={index}>
                                    <img src={data} alt={theProject.projectTitle} />
                              </div>
                        )}
                        <p>{theProject.projectDesc}</p>
                        <Link to="/projets">Back to all projects</Link>
                  </section>
                  <Footer/>
            </>
            
      )
}

export default Projet;