import Welcome from "./Welcome";
import Header1 from "../Header/Header1";
import Footer from "../Footer/Footer";
import './Pages.css';

const Pages = () => {


    return( 
        <div className = "home_page">
            <Welcome/>
            <Footer/>
            <Header1/>
            
       </div>
        
    );
}

export default Pages;