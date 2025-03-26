import { useNavigate } from "react-router-dom";
import Carousel from "../../components/carousel/carousel.component";
import TempPic1 from '../../assets/images/lego fortnite.jpg';
import TempPic2 from '../../assets/images/ghost janitors + fortnite.jpg';
import TempPic3 from '../../assets/images/fortnite wrecked.jpg';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      {/* <h1>Home</h1> */}
      {/* <Carousel images={[TempPic1, TempPic2, TempPic3]} /> */}
      <Carousel>
        <img onClick={() => navigate("/about")} src={TempPic1} alt="Lego Fortnite" />
        <img onClick={() => navigate("/twitch")} src={TempPic2} alt="Ghost Janitors + Fortnite" />
        <img onClick={() => navigate("/merch")} src={TempPic3} alt="Fortnite Wrecked" />
      </Carousel>
    </div>
  );
};

export default Home;