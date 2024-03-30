import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logo from '../img/logo.svg';
import './Header1.css';

const  Header1 = () => {

  const navigate = useNavigate();

  



  return (

      <div class="header">
       <img src={logo} className="logo" alt="Logo"/>
       <div className="navigator_bar" >
           <h1 className="line1">|</h1>
           <ul className="navigator">
              <li className="" onClick={() => navigate('/')}>
              HOME
              <span class="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className="" onClick={() => navigate('/pages')}>
              PAGES
              <span class="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className="" onClick={() => navigate('/tracking')}>TRACKING</li>
              <li className="" onClick={() => navigate('/services')}>
              SERVICES
              <span class="material-symbols-outlined">arrow_drop_down</span>
              </li>
              <li className="" onClick={() => navigate('/blog')}>
              BLOG
              <span class="material-symbols-outlined">arrow_drop_down</span>
              </li>
                     
           </ul>
           <div className="login_signup">
                <Button class="signup" onClick={() => navigate('/')}>GET A QUOTE</Button>
                <Button class="login"  onClick={() => navigate('/')}>SIGN IN</Button>

           </div>
         

       </div>
       <span class="material-symbols-outlined menu1">menu</span>
       <span class="material-symbols-outlined menu2">close</span>
      </div>


    
  );
}






export default Header1;
