import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Man from "../images/man3.jpg";
import Women from "../images/women.jpg";

const About = () => {
  const [userData, setuserData] = useState({});

  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // it specially for that our cookie will perfectly send to backend
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setuserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={userData.name === "Shiv" ? Man : Women}
                  alt="Profile"
                  width="300"
                  height="400"
                  className="rounded"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
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
                  <a className="my-1" href="/about">
                    Youtube
                  </a>
                  <a className="my-1" href="/about">
                    Twitter
                  </a>
                  <a className="my-1" href="/about">
                    Dribble
                  </a>
                  <a className="my-1" href="/about">
                    Instagram
                  </a>
                  <a className="my-1" href="/about">
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
                      <p>{userData._id}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Name:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Email-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Phone:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">{userData.work}</label>
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
                      <p>{userData._id}</p>
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
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Alternative Phone:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 py-2">
                      <label htmlFor="User ID">Hobby:-</label>
                    </div>

                    <div className="col-md-6 py-2">
                      <p>{userData.work}</p>
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
