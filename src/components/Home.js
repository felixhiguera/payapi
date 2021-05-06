import React from "react";
import phone from "../images/phoncito.png";
import tesla from "../images/tesla.png";
import microsoft from "../images/microsoft.png";
import hw from "../images/hw.png";
import oracle from "../images/oracle.png";
import nvidia from "../images/nvidia.png";
import google from "../images/google.png";
import Rectangle from "../images/Rectangle.png";
import phones from "../images/phones.png";
import finances from "../images/finances.png";
import banking from "../images/banking.png";
import consumer from "../images/consumer.png";
import rec from "../images/rectangle2.png";
import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";
import phonebigsize from "../images/iPhone-X-Mockup.png";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-phone" id="home-header">
          <img id="main-phone" src={phonebigsize} alt="" />
        </div>
        <div className="home-head">
          <h1>Start building with our APIs for absolutely free.</h1>
          <input type="text" placeholder="Enter email address" />
          <input id="home-button" type="button" value="Schedule a demo" />
          <h2>Have any questions? Contact Us</h2>
        </div>
      </div>
      <section className="companies">
        <div className="companies-grid">
          <div className="home-companies-logo">
            <img src={tesla} alt="" />
            <img src={microsoft} alt="" />
            <img src={hw} alt="" />
            <img src={oracle} alt="" />
            <img src={nvidia} alt="" />
            <img src={google} alt="" />
          </div>
          <div className="home-companies-topic">
            <h1>Who we work with</h1>
            <p>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{" "}
            </p>
            <button>About us</button>
          </div>
        </div>
      </section>
      <section className="home-easy">
        <div className="home-easy-image">
          <img src={rec} alt="" />
        </div>
        <div className="home-easy-topic">
          <h2>Easy to implement</h2>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>
      <section className="home-simple">
        <div className="home-simple-image">
          <div id="home-simple-image-div"></div>
        </div>
        <div className="home-simple-topic">
          <h2>Simple UI & UX</h2>
          <p>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="home-logo">
          <div className="home-logo-grid">
            <img src={finances} alt="" />
            <h3>Personal Finances</h3>
            <p>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.{" "}
            </p>
          </div>
          <div className="home-logo-grid">
            <img src={banking} alt="" />
            <h3>Banking & Coverage</h3>
            <p>
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div className="home-logo-grid">
            <img src={consumer} alt="" />
            <h3>Consumer Payments</h3>
            <p>
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="home-head">
          <h3>Ready to start?</h3>
          <div className="home-head">
            <input type="text" placeholder="Enter email address" />
            <input id="home-button" type="button" value="Schedule a demo" />
          </div>
        </div> */}
    </>
  );
};

export default Home;
