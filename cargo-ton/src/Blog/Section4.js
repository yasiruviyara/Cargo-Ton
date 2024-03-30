import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';
import logo4 from '../img/logo4.png';
import logo5 from '../img/logo5.png';


import './Blog.css';

const  Section4 = () => {

    return(
        <div class="section4">
            <img src={logo1} className="logo1" alt="Logo1"/>
            <img src={logo2} className="logo2" alt="Logo2"/>
            <img src={logo3} className="logo3" alt="Logo3"/>
            <img src={logo4} className="logo4" alt="Logo4"/>
            <img src={logo5} className="logo5" alt="Logo5"/>
        </div>

         );
}

export default Section4;