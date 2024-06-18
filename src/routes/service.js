import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trips";

function Service() {
    return(
        <>
        <Navbar/>
        <Hero
        cName ="hero-mid"
        heroImg = "https://wallup.net/wp-content/uploads/2016/03/10/319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg"
        title="Service"
        btnClass = "hidebutton"
        />
        <Trip/>

        <Footer/>
      </>
    
    );
    }
    export default Service;