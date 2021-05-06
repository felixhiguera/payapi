import React from "react";
// import together from "../images/together.png";
import together from "../images/together2.png";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <h1 id="about-header">
          We empower innovators by delivering access to the financial system
        </h1>
        <div className="about-grid">
          <h2>Our Vision</h2>
          <p>
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.{" "}
          </p>
        </div>
        <div className="about-grid">
          <h2>Our Business</h2>
          <p>
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.{" "}
          </p>
        </div>
        <img id="together" src={together} alt="" />
        <hr />
        <div className="about-team">
          <div className="about-team-group">
            <h3>Team Members</h3>
            <h2>300+</h2>
          </div>
          <div className="about-team-group">
            <h3>Office in the US</h3>
            <h2>3</h2>
          </div>
          <div className="about-team-group">
            <h3> Transactions analyzed</h3>
            <h2>10M+</h2>
          </div>
        </div>
        <div className="about-grid">
          <h2>The Culture</h2>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="about-grid">
          <h2>The People</h2>
          <p>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
