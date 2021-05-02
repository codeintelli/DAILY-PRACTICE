import React from "react";
import HomeImg from "./images/home.png";
import Common from "./component/Common";
const Home = () => {
  return (
    <>
      <Common
        heading="Grow your Bussiness with"
        brand_text="ITVMH"
        sub_text="We Are The Team Of Telented Developer"
        btn_text="Get Started"
        btn_link="/service"
        MainImg={HomeImg}
      />
    </>
  );
};

export default Home;
