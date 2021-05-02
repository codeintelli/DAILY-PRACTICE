import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-center text-capitalize text-primary my-5">
        Welcome to Itvmh
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/300/300"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/301/300"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/302/300"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
