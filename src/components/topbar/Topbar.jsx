import "./topbar.scss";
import { Mail, Person, LinkedIn, GitHub } from "@mui/icons-material";
import { Icon } from "@iconify/react";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Zouari.M.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="tel:+21620169630" target="_blank" className="toLink">
              <span className="toLink">+216 20 169 630</span>
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a
              href="mailto:mohsennzouari@gmail.com"
              target="_blank"
              className="toLink"
            >
              <span className="toLink">mohsennzouari@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer toLink">
            <LinkedIn className="icon" />

            <a
              href="https://www.linkedin.com/in/mohsen-zouari"
              target="_blank"
              className="toLink"
            >
              <span>mohsen-zouari</span>
            </a>
          </div>
          <div className="itemContainer toLink">
            <Icon icon="mdi:gitlab" className="icon" />
            <a
              href="https://gitlab.com/Mohsen_Zouari"
              target="_blank"
              className="toLink"
            >
              <span>Mohsen_Zouari</span>
            </a>
          </div>
          <div className="itemContainer toLink">
            <GitHub className="icon" />
            <a
              href="https://github.com/mohsenzouari"
              target="_blank"
              className="toLink"
            >
              <span>mohsenzouari</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
