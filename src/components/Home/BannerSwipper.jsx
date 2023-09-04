import "./BannerSwipper.css";
import profileImg from "../../assets/Images/profile.png";

const BannerSwipper = () => {
  return (
    <div>
      <div className="max-w-md rounded-full animated-border-box-glow relative mt-8 md:mt-0">
        <div className="box flex justify-center items-center z-50">
          <img className="w-full" src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerSwipper;
