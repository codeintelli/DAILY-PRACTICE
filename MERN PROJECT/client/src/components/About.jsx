import React from "react";
import Man from "../images/man3.jpg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={Man} alt="Profile" width="300" height="300" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Shiva Mahadev</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rankings: <span> 10/10 </span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#home"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#profile"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn btn-success text-white"
                name="btnAddMore"
                value="Edit"
              />
            </div>
          </div>

          <div className="row">
            {/* left side URL */}
            <div className="col-md-4">
              <div className="profile-work ">
                <p>Work Link</p>
                <div className="d-flex flex-column ">
                  <a className="my-1" href="#">
                    Youtube
                  </a>
                  <a className="my-1" href="#">
                    Twitter
                  </a>
                  <a className="my-1" href="#">
                    Dribble
                  </a>
                  <a className="my-1" href="#">
                    Instagram
                  </a>
                  <a className="my-1" href="#">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            {/* Right Side Data Toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">User Id:-</label>
                    </div>
                    <div className="col-md-6 py-2">
                      <p>8888888888</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Name:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>Shiva</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Email-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>codeintelli@gmail.com</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Phone:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>8888888888</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Profession:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>CEO</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Unique Id:-</label>
                    </div>
                    <div className="col-md-6 py-2">
                      <p>8888888888</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Experience:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>Shiva</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Account-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>codeintelli@gmail.com</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Alternative Phone:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>8888888888</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Hobby:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
