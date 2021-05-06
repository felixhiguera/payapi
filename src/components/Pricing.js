import React from "react";
import tick from "../images/tick.png";
import Header from "./Header";

const Pricing = () => {
  return (
    <div>
      <Header />
      <h1 id="price">Pricing</h1>
      <div className="pricing">
        <div className="pricing-plan">
          <h2>Free Plan</h2>
          <h3>$0.00</h3>
          <br />
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Transaction
          </h4>
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Auth
          </h4>
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Identity
          </h4>
          <h4 className="unticked">Investments</h4>
          <h4 className="unticked">Assets</h4>
          <h4 className="unticked">Liabilites</h4>
          <h4 className="unticked">Income</h4>
          <br />
          <button>Request Access</button>
        </div>

        <div className="pricing-plan">
          <h2>Basic Plan</h2>
          <h3>$249.00</h3>
          <br />
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Transaction
          </h4>
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Auth
          </h4>
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Identity
          </h4>
          <h4>
            {" "}
            <span>
              <img src={tick} alt="" />
            </span>
            Investments
          </h4>
          <h4>
            {" "}
            <span>
              <img src={tick} alt="" />
            </span>
            Assets
          </h4>
          <h4 className="unticked">Liabilites</h4>
          <h4 className="unticked">Income</h4>
          <hr />
          <button>Request Access</button>
        </div>
        <div className="pricing-plan">
          <h2>Premium Plan</h2>
          <h3>$499.00</h3>
          <br />
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Transaction
          </h4>
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Auth
          </h4>
          <h4 className="ticked">
            <span>
              <img src={tick} alt="" />
            </span>
            Identity
          </h4>
          <h4>
            {" "}
            <span>
              <img src={tick} alt="" />
            </span>
            Investments
          </h4>
          <h4>
            {" "}
            <span>
              <img src={tick} alt="" />
            </span>
            Assets
          </h4>
          <h4>
            {" "}
            <span>
              <img src={tick} alt="" />
            </span>
            Liabilites
          </h4>
          <h4>
            {" "}
            <span>
              <img src={tick} alt="" />
            </span>
            Income
          </h4>
          <br />
          <button>Request Access</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
