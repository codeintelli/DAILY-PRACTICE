import React from "react";
import PhoneImg from "../images/telephone.png";
import EmailImg from "../images/email.png";
import AddressImg from "../images/address.png";

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="contact_info_item  d-flex justify-content-start align-items-center rounded-animated">
                <img src={PhoneImg} alt="phone" width="40" height="40" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 7698983441</div>
                </div>
              </div>

              <div className="contact_info_item  d-flex justify-content-start align-items-center rounded-animated">
                <img src={EmailImg} alt="phone" width="40" height="40" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">codeintelli@gmail.com</div>
                </div>
              </div>

              <div className="contact_info_item  d-flex justify-content-start align-items-center rounded-animated">
                <img src={AddressImg} alt="phone" width="40" height="40" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text"> Ahmedabad</div>
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
              <div className="contact_form_container py-2">
                <div className="contact_form_title">Get In Touch</div>
                <form id="contact_form">
                <div className="contact_form_name d-flex justify-content-between align-items-between">
                  <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your Name" require="true" />

                   <input type="email" id="contact_form_email" className="contact_form_email input_field" placeholder="Your Email" require="true" />

                    <input type="number" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your Mobile Number" require="true" />
                </div>
                   <div className="contact_form_text mt-4" >
                     <textarea className=" text_field contact_form_message" placeholder="Enter Your Message Here" style={{resize:'none'}} id="" cols="30" rows="10"></textarea>
                   </div>
                   <div className="contact_form_button">
                     <button type="submit" className="button contact_submit_button rounded-animated">Send Message</button>
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
