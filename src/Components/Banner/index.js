import React from "react";
import "./Style.css";
import Shadow from "../../Assets/Images/shadow.png";

function Component() {
  return (
    <React.Fragment>
      <div className="tw-top align-center">
        <img
          src="https://www.jukinmedia.com/assets/images/thewire/thewire-logo.png"
          alt="The Wire"
        />
        <p>
          Your <span>real-time</span> source for the world's best user-generated
          videos...<span>before</span> they go viral.
        </p>
      </div>
      <img src={Shadow} className="shadowbg" alt="Shadow" />
    </React.Fragment>
  );
}

export default Component;
