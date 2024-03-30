import footer_img1 from '../img/footer_img1.png';
import footer_img2 from '../img/footer_img2.png';
import footer_img3 from '../img/footer_img3.png';
import footer_img4 from '../img/footer_img4.png';
import footer_img5 from '../img/footer_img5.png';
import footer_img6 from '../img/footer_img6.png';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';

import './Footer.css';

const  Footer = () => {

    return(
        <div class="footer">
            <h1 class="footer_tittle_1">Weekly Newsletter</h1>
            <h2 class="footer_tittle_2">
                There are many vaiations of passages of lorem ipsum available.
            </h2>
            <div class="email_box">
                <div class="email_box1">Enter Your Mail</div>
                <div class="email_button">SUBSCRIBE</div>
            </div>

            <div class="footer_section1">
                <h2 class="section_tittle">About Us</h2>
                <div class="dot_line">.......</div>
                <p class="section_text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span class="material-symbols-outlined call_icon">call</span> 
                <p class="section_text2">    
                (+94) 11 434 7575 
                </p>
                <span class="material-symbols-outlined">location_on</span>
                <p class="section_text3">
                    42 Lily Ave, Colombo 00600
                </p>
            </div>

            <div class="footer_section2">
                <h1 class="section_tittle">Latest News</h1>
                <div class="dot_line">.......</div><br/>
                <span class="material-symbols-outlined">chevron_right</span>
                <p class="section2_text1 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                <br/><br/>
                5 Miniutes Ago
                </p><br/>
                <span class="material-symbols-outlined">chevron_right</span>
                <p class="section2_text1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                <br/><br/>
                5 Miniutes Ago
                </p>
                
            </div>

            <div class="footer_section3">
                <h1 class="section_tittle">Customer Service</h1>
                <div class="dot_line">.......</div><br/>
                <span class="material-symbols-outlined">arrow_right</span>
                <p class="section3_text1">Support Forums</p>
                <span class="material-symbols-outlined">arrow_right</span>
                <p class="section3_text1">Communication</p>
                <span class="material-symbols-outlined">arrow_right</span>
                <p class="section3_text1">FAQS</p>
                <span class="material-symbols-outlined">arrow_right</span>
                <p class="section3_text1">Privacy Policy</p>
                <span class="material-symbols-outlined">arrow_right</span>
                <p class="section3_text1">Rules & Condition</p>
                <span class="material-symbols-outlined">arrow_right</span>
                <p class="section3_text1">Contact Us</p>
                
            </div>

            <div class="footer_img">
                <img src={footer_img1} className="footer_img1" alt="Footer Img 1"/>
                <img src={footer_img2} className="footer_img2" alt="Footer Img 2"/>
                <img src={footer_img3} className="footer_img3" alt="Footer Img 3"/>
                <img src={footer_img4} className="footer_img4" alt="Footer Img 4"/>
                <img src={footer_img5} className="footer_img5" alt="Footer Img 5"/>
                <img src={footer_img6} className="footer_img6" alt="Footer Img 6"/>
            </div>

        

            <div class="social_media">
                 <img src={icon1} className="icon1" alt="Social Media Icon 1"/>
                 <img src={icon2} className="icon2" alt="Social Media Icon 2"/>
                 <img src={icon3} className="icon3" alt="Social Media Icon 3"/>
                 <img src={icon4} className="icon4" alt="Social Media Icon 4"/>
                 <img src={icon5} className="icon5" alt="Social Media Icon 5"/>
                
            </div>
            
            <h5 class="copy_wirte">
                v1.0 Copyright&copy; 2021 Rights Reserved. Site By Yasiru Viyara&reg; 
            </h5>

        </div>

);
}

export default Footer;