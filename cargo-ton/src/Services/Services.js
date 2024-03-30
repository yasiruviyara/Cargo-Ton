import Section1 from './Section1';
import Section2 from './Section2';
import Header1 from "../Header/Header1";
import './Services.css';
import Footer from "../Footer/Footer";

const Services = () => {


    return( 
        <div className = "home_page">
            <Section1/>
            <Section2/>
            <Footer/>
            <Header1/>
            
       </div>
        
    );
}

export default Services;