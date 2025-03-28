import { useNavigate } from "react-router-dom";
import Carousel from "../../components/carousel/carousel.component";
import TempPic1 from '../../assets/images/lego fortnite.jpg';
import TempPic2 from '../../assets/images/ghost janitors + fortnite.jpg';
import TempPic3 from '../../assets/images/fortnite wrecked.jpg';

import "./home.styles.scss";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="home-container">
                <Carousel navigation={false} autoPlay={true} autoPlayTime={6000}>
                    <img onClick={() => navigate("/about")} src={TempPic1} alt="Lego Fortnite" />
                    <img onClick={() => navigate("/twitch")} src={TempPic2} alt="Ghost Janitors + Fortnite" />
                    <img onClick={() => navigate("/merch")} src={TempPic3} alt="Fortnite Wrecked" />
                </Carousel>
            </div>
        </div>
    );
};

export default Home;