import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QuizzData from "../data/quizz.json";



const SingleQuizz = () => {
  const slug = useParams();
  console.log(slug);

  const quizz = QuizzData.quizz[slug.id - 1];
  console.log(quizz);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  useEffect(() => {
    document.title = "Quizz de " + quizz.quizzTitle;
  });

  const buttonHandlerQuizz = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quizz.quizzQuestions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true)
    }
  }

  return (
    <>
      <Navbar />
      <section id="singlequizz">
        {showScore ? (
          <>
            <h1>Bravo ! votre score est de {score} / {quizz.quizzQuestions.length}</h1>
            <Link to="/quizz">Retour aux quizz</Link>
          </>
        ) : (
          <>
            <h1>{quizz.quizzQuestions[currentQuestion].questionTitle}</h1>
            <div className="questionsContainer">
              {quizz.quizzQuestions[currentQuestion].answers.map((data, index) => 
                <button key={index} onClick={() => buttonHandlerQuizz(data.isCorrect)}>{data.answerTitle}</button>
                )}
            </div>
          </>
          )}
      </section>
      <Footer />
    </>
  );
};

export default SingleQuizz;
