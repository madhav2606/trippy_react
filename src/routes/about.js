import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
return(
    <>
      <Navbar/>
      <Hero
      cName ="hero-mid"
      heroImg = {AboutImg}
      title="About"
    //   text = " Choose Your Favorite Destination "
    //   buttonText = "Travel Plan"
      // url = "/"
      btnClass = "hidebutton"
      />
      <AboutUs/>
      <Footer/>
    </>

);
}
export default About;