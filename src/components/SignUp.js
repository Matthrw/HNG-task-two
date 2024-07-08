import React from "react";
import "../styles/signup.css";

function SignUp() {
  return (
    <div className="sign_up">
      <h2>SignUp & Get 20% off</h2>
      <p>
        Join now for exclusive discounts and skincare tips,Start saving today
      </p>
      <br />
      <input type="text" placeholder="Name" />
      <br></br>
      <input type="email" placeholder="email" />
      <button>
        <span>Submit</span>
      </button>
    </div>
  );
}

export default SignUp;
