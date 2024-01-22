import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Hero id=""/>
      <Services id="services"/>
      <Portfolio id="portfolio"/>
      <AboutMe id="about"/>
      <Contact/>
    </div>
  );
};

export default Home;
