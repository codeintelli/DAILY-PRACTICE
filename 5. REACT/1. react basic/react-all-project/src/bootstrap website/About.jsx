import React from "react";
import Common from "./component/Common";
import AboutImg from "./images/about.png";

const About = () => {
  return (
    <>
      <Common
        heading="Welcome to About Us Page"
        brand_text="ITVMH"
        sub_text="We Are The Team Of Telented Developer"
        btn_text="Contact Us"
        btn_link="/contact"
        MainImg={AboutImg}
      />
    </>
  );
};

export default About;
