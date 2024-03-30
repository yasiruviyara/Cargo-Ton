import {Button} from '@mui/material';

// import logo from './logo.svg';
import './Pages.css';

const Welcome = () => {


    return(

    <div class="welcome_page">
        {/* <img src={logo} className="logo" alt="Logo"/> */}
        <div class="welcome_img_2"></div>
        <div class="welcome_img_1"></div>
        <div class="welcome_post">
        <div class="welcome_post_tittle_1">
            TransMax Logistics 
        </div>
        <div class="welcome_post_tittle_1">Around</div>
        <div class="welcome_post_tittle_2">the World</div>
        <div class="welcome_post_text_1">
        Transmax is the world's driving worldwide coordinations supplier - we uphoindustry and exchange the worldwide trade of merchandise through latransport.
        </div>
        <div class="welcome_post_text_2">
        Our worth added administrations guarantee the progression of producproceeds consistently and supply chains stay lean and streamlined fprogress.
        </div>
        <Button class="welcome_post_button">MORE ABOUT US</Button>
        </div>
        <div class="msg1">15,350+<br/> Clients Worldwide</div>
        <div class="graphic1"></div>
        <div class="graphic2"></div>

     </div>

            
    );
}

export default Welcome;