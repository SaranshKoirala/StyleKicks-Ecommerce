import Footer from "../Components/Footer.jsx";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import Section from "../Components/Section.jsx";
import Shoes from "../Components/Shoes.jsx";

function Home() {
  return (
    <div>
      <Navbar logo="full-logo2.png" bgcolor="white" textcolor="black" />
      <Hero />
      <Shoes />
      <Section />
      <Footer />
    </div>
  );
}

export default Home;
