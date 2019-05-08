import React from "react";
import "./Style.css";

function Component() {
  return (
    // <div className="uil-ring-css loading-icon" style="transform:scale(0.6);"><div></div></div>
    <footer className="footer">
      <div className="row">
        <div className="col-sm-8 col-xs-12">
          <p>
            © Copyright Jukin Media, Inc. 2019. All rights reserved.
            <a className="terms" href="https://www.jukinmedia.com/terms">
              Terms
            </a>
            <a href="https://www.jukinmedia.com/privacy-policy">
              Privacy Policy
            </a>
            <a className="terms" href="https://www.jukinmedia.com/blog">
              Our Blog
            </a>
            <a href="https://www.jukinmedia.com/press-room">Press Room</a>
          </p>
        </div>

        <div className="col-sm-4 col-xs-12 pull-right">
          <p className="align-right">
            <span>
              <a
                href="https://www.linkedin.com/company/jukin-media"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://www.youtube.com/user/JukinMedia"
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://www.facebook.com/jukinmedia"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="http://instagram.com/jukinmedia"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://twitter.com/JukinMedia"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Component;
