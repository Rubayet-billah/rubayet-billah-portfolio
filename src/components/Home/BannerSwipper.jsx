import "./BannerSwipper.css";
// import profileImg from "../../assets/Images/profile.png";
import profileImg from "../../assets/Images/portfolio_profile.jpg";

const BannerSwipper = () => {
  return (
    <div>
      <div className="relative max-w-md mt-8 rounded-full animated-border-box-glow lg:mt-0">
        <div className="z-10 flex items-center justify-center box">
          <img className="w-full" src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerSwipper;
