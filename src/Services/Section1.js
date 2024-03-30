import { Button } from '@mui/material';
import './Services.css';

const Section1 = () => {


    return(
      <div className="section1">
          <h3 className="section_tittle1">Real Solution, Real Fast !</h3>
          <h1 className="section_tittle2">Best Global Logistics Solutions.</h1>
          
          
          <div className="section_box1">
             <div className="box1_img"></div>
             <div className="box1_tag">
             <span class="material-symbols-outlined tag1">directions_boat</span>
             </div>
             <h1 className="box_tittle">Air Freight Services</h1>
             <p className="box_text">
                At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.
            </p>
             <Button class="box_button">
             <span class="material-symbols-outlined next1">arrow_forward</span>
                <p class="box_button_text">Read More</p>
            </Button>
          </div>


          <div className="section_box2">
             <div className="box2_img"></div>
             <div className="box1_tag">
             <span class="material-symbols-outlined tag2">travel</span>
             </div>
             <h1 className="box_tittle">Drone Services</h1>
             <p className="box_text">
             These are unique and often they differ from one industry to the other. Our logistics expertise.
            </p>
             <Button class="box_button">
             <span class="material-symbols-outlined next1">arrow_forward</span>
                <p class="box_button_text">Read More</p>
            </Button>
          </div>
          

          <h3 className="slide_text1">
          Logistic & Transport Solutions Saves Your Time.
             <h3 className="slide_text2">
             Find Your Solutions
             <span class="material-symbols-outlined next2">arrow_forward</span>
             </h3>
          </h3>
          <div className="bar_dots">
          <span class="material-symbols-outlined dot1">fiber_manual_record</span>
          <span class="material-symbols-outlined">fiber_manual_record</span>
          <span class="material-symbols-outlined">fiber_manual_record</span>
          <span class="material-symbols-outlined">fiber_manual_record</span>
          <span class="material-symbols-outlined">fiber_manual_record</span>
          <span class="material-symbols-outlined">fiber_manual_record</span>
          </div>

      </div>        
    );
}

export default Section1;