import Blog from "./Blog";
import Contact from "./Contact";
import HappyClients from "./HappyClients";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";
import Profession from "./Profession";
import Profile from "./Profile";
import Testimonial from "./Testemonial";
import WorkProcess from "./WorkProcess";
import WorkTogether from "./WorkTogether";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-picto-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Blog />
      </div>
      <div className="bg-picto-soft-white">
        <Profession />
      </div>
      <HappyClients />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;