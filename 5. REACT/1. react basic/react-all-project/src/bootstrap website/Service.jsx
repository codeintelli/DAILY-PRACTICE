import React from "react";
import Card from "./component/card";
import ArrData from "./component/arraydata";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className=" container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {ArrData.map((val, ind) => {
                return (
                  <Card
                    key={Math.random()}
                    imgSrc={val.imgSrc}
                    card_title={val.card_title}
                    card_subtext={val.card_subtext}
                    btnLink={val.btnLink}
                    btnTitle={val.btnTitle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
