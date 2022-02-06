import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/components/_home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio - Maxime Attala";
  });
  return (
    <>
      <Navbar />
      <section id="home">
        <div>
          <h1>Maxime Attala</h1>
          <h2>IIM Student - 2024 school group</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
