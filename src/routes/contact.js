
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
function Contact() {
    return(
        <>
    <Navbar/>
        <Hero
        cName ="hero-mid"
        heroImg = "https://th.bing.com/th/id/R.71fc55a0f2becd702cc4a893980dea57?rik=XOUhz40Jc9OcYg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images-6.jpg&ehk=BQoi8QCZQtCfHkXWT0TIAxv1vTtTO1rY7ctKskX6Xfs%3d&risl=&pid=ImgRaw&r=0"
        title="Contact"
        btnClass = "hidebutton"
        />
        <Footer/>
        </>
    
    );
    }
    export default Contact;