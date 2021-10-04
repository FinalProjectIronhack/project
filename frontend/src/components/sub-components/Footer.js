import React from "react";
import logo from "../../Images/FinalProLogoBro.png";
function Footer(props) {
  return (
    <div>
      <footer>
        <img src={logo} />
        <div class="footerContainer">
          <p className="pf">
            Designed By{" "}
            <a
              className="af"
              target="_blank"
              href="https://github.com/PraveenaMaliipeddi"
            >
              Praveena
            </a>
            ,{" "}
            <a
              className="af"
              target="_blank"
              href="https://github.com/Michaelscodecollection"
            >
              Michael
            </a>
            {"   "}
            and{" "}
            <a
              className="af"
              target="_blank"
              href="https://github.com/brunobarbagelata"
            >
              Bruno
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
