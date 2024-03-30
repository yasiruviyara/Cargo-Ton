import news1 from '../img/news_img1.jpg';
import news2 from '../img/news_img2.jpg';
import news3 from '../img/news_img3.jpg';
import news4 from '../img/news_img4.jpg';

import './Tracking.css';

const News = () => {

    return(
        <div class="news">
            <h1 className="news_tittle1">LATEST NEWS</h1>
            <h3 className="news_tittle2">
                <div class="tittle_tag"></div>
                INTEGER CONGUEELIT
            </h3>

            <div class="news_box1">
                <img src={news1} className="news_img1" alt="News1"/>
                <div class="news_box_graphic">
                    <h3 class="graphic_text1">26</h3>
                    <h3 class="graphic_text2">MAY</h3>
                </div>
                <h1 class="box_tittle1">CURABITUR LOREM UISM QUIS</h1>
                <div class="box_tittle2">
                    <h3 class="text1">Admin</h3>
                    <span class="material-symbols-outlined msg_tag">forum</span>
                    <h3 class="text2">15</h3>
                </div>
                <p class="news_box_text">
                Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec...
                </p>
                

            </div>

            <div class="news_box2">
                <img src={news2} className="news_img1" alt="News1"/>
                <div class="news_box_graphic">
                    <h3 class="graphic_text1">22</h3>
                    <h3 class="graphic_text2">MAY</h3>
                </div>
                <h1 class="box_tittle1">CURABITUR LOREM UISM QUIS</h1>
                <div class="box_tittle2">
                    <h3 class="text1">Admin</h3>
                    <span class="material-symbols-outlined msg_tag">forum</span>
                    <h3 class="text2">15</h3>
                </div>
                <p class="news_box_text">
                Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec...
                </p>
                

            </div>

            <div class="news_box3">
                <img src={news3} className="news_img1" alt="News1"/>
                <div class="news_box_graphic">
                    <h3 class="graphic_text1">20</h3>
                    <h3 class="graphic_text2">MAY</h3>
                </div>
                <h1 class="box_tittle1">CURABITUR LOREM UISM QUIS</h1>
                <div class="box_tittle2">
                    <h3 class="text1">Admin</h3>
                    <span class="material-symbols-outlined msg_tag">forum</span>
                    <h3 class="text2">15</h3>
                </div>
                <p class="news_box_text">
                Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec...
                </p>
                

            </div>

            <div class="news_box4">
                <img src={news4} className="news_img1" alt="News1"/>
                <div class="news_box_graphic">
                    <h3 class="graphic_text1">15</h3>
                    <h3 class="graphic_text2">MAY</h3>
                </div>
                <h1 class="box_tittle1">CURABITUR LOREM UISM QUIS</h1>
                <div class="box_tittle2">
                    <h3 class="text1">Admin</h3>
                    <span class="material-symbols-outlined msg_tag">forum</span>
                    <h3 class="text2">15</h3>
                </div>
                <p class="news_box_text">
                Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec...
                </p>
                

            </div>

            

        </div>

    );
 }
    
export default News;