import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import './Slider1.css';

const  Slider1 = () => {
 
  const navigate = useNavigate();

  return (

      <div class="slider">
          <div class="slider_img"></div>
          <div class="slider_box">
              <h1 className="line2">|</h1>
              <h3 className="slider_title_1">LOGISTIC</h3>
              <h1 className="slider_title_2">Best Shipping</h1>
              <h1 className="slider_title_3">Partner</h1>
              <p className="slider_text">
                Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida nequi.
              </p>
              <Button class="slider_button"  onClick={() => navigate('/pages')}>
              DISCOVER MORE
              </Button>
          </div>
          <h2 class="slider_angal_text_1">#CARGOTON</h2>
          <h2 class="slider_angal_text_2">LOGISTIC</h2>
          <div class="slider_move">
             <h4 class="slider_number_1">1</h4><h4 class="slider_number_2">| 2</h4>
             <span class="material-symbols-outlined back">arrow_back</span>
             <span class="material-symbols-outlined next">arrow_forward</span>

          </div>

      </div>   
  );
}

export default Slider1;
