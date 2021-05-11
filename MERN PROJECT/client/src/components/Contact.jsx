import React, { useState, useEffect } from "react";
// import PhoneImg from "../images/telephone.png";
// import EmailImg from "../images/email.png";
// import AddressImg from "../images/address.png";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const history = useHistory();
  const callPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // it specially for that our cookie will perfectly send to backend
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setuserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

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
    callPage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setuserData({
      ...userData,
      [name]: value,
    });
  };

  // send data to backend

  const contactFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data || !data.message) {
      console.log("message not send");
      alert("message not send Message field cant be blank");
    } else {
      alert("message Sent");
      setuserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/office/24/000000/iphone.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Phone</div>
                    <div className="contact_info_text">+91 1111 543 2198</div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Email</div>
                    <div className="contact_info_text">contact@thapa.com</div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Address</div>
                    <div className="contact_info_text">Pune, MH, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact us form */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      value={userData.name}
                      onChange={handleInput}
                      name="name"
                      require="true"
                      disabled
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      value={userData.email}
                      onChange={handleInput}
                      name="email"
                      require="true"
                      disabled
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Mobile Number"
                      value={userData.phone}
                      onChange={handleInput}
                      name="phone"
                      disabled
                      require="true"
                    />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea
                      className=" text_field contact_form_message"
                      placeholder="Enter Your Message Here"
                      value={userData.message}
                      name="message"
                      onChange={handleInput}
                      style={{ resize: "none" }}
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      onClick={contactFormSubmit}
                      className="button contact_submit_button rounded-animated"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
