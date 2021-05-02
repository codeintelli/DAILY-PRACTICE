import React, { useState } from "react";

const Contact = () => {
  const [formData, setformData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setformData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `name is ${formData.fullname}, mobile no is  ${formData.phone}, email is  ${formData.email}, message is ${formData.message}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={InputEvent}
                  value={formData.fullname}
                  className="form-control"
                  name="fullname"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone
                </label>
                <input
                  type="number"
                  onChange={InputEvent}
                  value={formData.phone}
                  name="phone"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Contact Number"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  onChange={InputEvent}
                  value={formData.email}
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Enter Your Views Here
                </label>
                <textarea
                  className="form-control"
                  onChange={InputEvent}
                  value={formData.message}
                  name="message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-success ">
                  Submit Data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
