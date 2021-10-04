import React from "react";
import logo from "../../Images/FinalProLogoBro.png";
function Footer(props) {
  return (
    <div>
      <footer>
        <img src={logo} />
        <div class="footerContainer">
          <p className="pf">
            Designed By
            <a
              className="af"
              target="_blank"
              href="https://github.com/PraveenaMallipeddi"
            >
              Praveena
            </a>
            ,
            <a className="af" target="_blank" href="https://github.com/Michael">
              Michael
            </a>
            {"   "}
            and
            <a className="af" target="_blank" href="https://github.com/Bruno">
              Bruno
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
