import "./request.css";
import React from "react";

const Request = () => {
  return (
    <div className="request-container" id="request">
      <div className="request-l">
        <hr />
        <div>
          <span className="def">Need My Service, Send Mail lets chat</span>
        </div>
      </div>
      <div className="request-r">
        <form action="" className="mail-request">
            <input type="email" name="user_email" placeholder="Enter your Email Address" />
            <button className="btn-request">Send Mail</button>
        </form>
      </div>
    </div>
  );
};

export default Request;
