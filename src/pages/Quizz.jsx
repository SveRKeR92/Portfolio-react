import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QuizzData from "../data/quizz.json";

import "../sass/components/_quizz.scss";

const Quizz = () => {
  useEffect(() => {
    document.title = "Quizz";
  });
  return (
    <>
      <Navbar />
      <section id="quizz">
        <h1>Quizz</h1>
        <div className="quizzContainer">
          {QuizzData.quizz.map((data, index) => (
            <Link to={"/singlequizz/" + data.quizzId} key={index}>
              <div className="quizzVignet">
                <h2>{data.quizzTitle}</h2>
                <p>{data.quizzDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Quizz;
