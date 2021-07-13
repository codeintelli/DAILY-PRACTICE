import React from "react";

const FunFact = () => {
  return (
    <>
      <section className="fun-facts section-padding">
        <div className="container">
          <div className="row">
            <div
              className="
              col-lg-6 col-md-5
              d-flex
              align-items-center
              justify-content-center
            "
            >
              <div className="fun-fact-img">
                <img src="img/app-screenshots/2.png" alt="fun-facts" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="section-title">
                <h2>
                  fun <span>facts</span>
                </h2>
                <p className="fun-facts-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero, iure magnam corporis exercitationem animi nulla quia
                  repellendus suscipit ducimus enim illum voluptates sit nobis
                  cumque mollitia ex fuga, deleniti eos.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <div data-tilt className="js-tilt">
                      <div className="fun-fact-item style-1">
                        <h3>4000</h3>
                        <span>Downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div data-tilt className="js-tilt">
                      <div className="fun-fact-item style-2">
                        <h3>200</h3>
                        <span>Likes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div data-tilt className="js-tilt">
                      <div className="fun-fact-item style-3">
                        <h3>500</h3>
                        <span>5 Star Ratings</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div data-tilt className="js-tilt">
                      <div className="fun-fact-item style-4">
                        <h3>150</h3>
                        <span>Awards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
