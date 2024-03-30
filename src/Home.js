import Header1 from "../src/Header/Header1";
import Slider1 from "../src/Slider/Slider1";
import Footer from "../src/Footer/Footer";


import './Home.css';


function Home() {
  return (

    <div className = "home_page" >
       <Slider1/>
       <Footer/>
       <Header1/>
    </div>

    
  );
}

export default Home;
