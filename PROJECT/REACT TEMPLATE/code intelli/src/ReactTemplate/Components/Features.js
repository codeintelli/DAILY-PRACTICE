import React from 'react'

const Features = () => {
    return (
      <>
        <section className="features section-padding" data-scroll-index="1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2>
                    awesome <span>Features</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="my-5"></div>
            <div className="row">
              <div className="owl-carousel features-carousel">
                <div data-tilt>
                  <div className="features-item">
                    <div className="icon">
                      <i className="bx bx-code-alt"></i>
                    </div>
                    <h3>Clean Code</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facere nulla ducimus magni ea recusandae quis?
                    </p>
                  </div>
                </div>

                <div data-tilt>
                  <div className="features-item">
                    <div className="icon">
                      <i className="bx bxs-edit"></i>
                    </div>
                    <h3>Auto Install System</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facere nulla ducimus magni ea recusandae quis?
                    </p>
                  </div>
                </div>

                <div data-tilt>
                  <div className="features-item">
                    <div className="icon">
                      <i className="bx bxs-paint"></i>
                    </div>
                    <h3>Pixel Perfect Design</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facere nulla ducimus magni ea recusandae quis?
                    </p>
                  </div>
                </div>

                <div data-tilt>
                  <div className="features-item">
                    <div className="icon">
                      <i className="bx bx-code-alt"></i>
                    </div>
                    <h3>Best Code</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facere nulla ducimus magni ea recusandae quis?
                    </p>
                  </div>
                </div>
                <div data-tilt>
                  <div className="features-item">
                    <div className="icon">
                      <i className="bx bxs-edit"></i>
                    </div>
                    <h3>OS System</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facere nulla ducimus magni ea recusandae quis?
                    </p>
                  </div>
                </div>
                <div data-tilt>
                  <div className="features-item">
                    <div className="icon">
                      <i className="bx bxs-paint"></i>
                    </div>
                    <h3>UI/UX Design</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facere nulla ducimus magni ea recusandae quis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Features
