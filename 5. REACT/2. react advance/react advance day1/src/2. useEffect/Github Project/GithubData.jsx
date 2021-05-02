import React from "react";
import { FcApproval } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
const GithubData = (props) => {
  return (
    <div>
      return (
      <div>
        <h2 className="text-white text-center">
          <GoMarkGithub /> List of GitHub Users <GoMarkGithub />
        </h2>
        <div className="container-fluid mt-2">
          <div className="row text-center">
            {props.Users.map((val, i) => {
              return (
                <>
                  <div className="col-10 col-md-4 mt-5">
                    <div className="card shadow p-2">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img
                            src={val.avatar_url}
                            className="rounded"
                            width="155"
                          />
                        </div>
                        <div className="ml-0 w-100">
                          <h4
                            className="mb-0 mt-0 textLeft text-white"
                            style={{ margin: "10px" }}
                          >
                            {val.login} <FcApproval />
                          </h4>
                          {/* <span className="text-left">{type }</span> */}
                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column">
                              <span className="articles">Following</span>
                              <span className="number1">
                                {val.following_url.length}
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="followers">Followers</span>
                              <span className="number2">
                                {val.followers_url.length}
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">Repo</span>
                              <span className="number3">
                                {val.repos_url.length}
                              </span>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      <a className="btn btn-primary mt-2 " href={val.html_url}>
                        Follow
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default GithubData;
