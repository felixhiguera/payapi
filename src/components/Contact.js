import React, { useState } from "react";
import tesla from "../images/tesla_blue.png";
import microsoft from "../images/ms_blue.png";
import hw from "../images/hp_blue.png";
import oracle from "../images/oracle_blue.png";
import nvidia from "../images/nvidia_blue.png";
import google from "../images/google_blue.png";
import Header from "./Header";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });
  const { name, email, company, title, message } = user;
  const [empty, setEmpty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const validation = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      company.trim() === "" ||
      title.trim() === "" ||
      message.trim() === ""
    ) {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }
    if (!er.test(email)) {
      setIsValid(true);
    }
  };

  return (
    <>
      <Header />
      <div className="contact">
        <h1 id="contact-header">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="div-contact-form">
          <form onSubmit={validation} className="contact-form">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={change}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={change}
            />
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              value={company}
              onChange={change}
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={change}
            />
            <input
              type="text"
              placeholder="Message"
              name="message"
              value={message}
              onChange={change}
            />
            <div className="contact-form-label">
              {" "}
              <input type="checkbox" id="" name="vehicle1" value="Bike" />
              <label for="vehicle1">
                {" "}
                Stay up-to-date with company announcements and updates to our
                API
              </label>
            </div>

            <br></br>
            <button>Submit</button>
            {empty ? <p>Can't be empty</p> : null}
            {isValid ? <p>Please use a valid email address</p> : null}
          </form>
          <div>
            <h2>Join the thousands of innovators already building with us</h2>
            <div className="home-companies-logo">
              <img src={tesla} alt="" />
              <img src={microsoft} alt="" />
              <img src={hw} alt="" />
              <img src={oracle} alt="" />
              <img src={nvidia} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
