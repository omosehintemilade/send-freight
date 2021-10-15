import React, { useState } from "react";
import sendLogo from "../../assets/images/send_freight_logo.png";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineCloseCircle
} from "react-icons/ai";

import "./header.css";
// const sendLogo = "https://www.send.ng/img/send.svg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-form-wrapper">
            <div className="logo-wrapper">
              <img src={sendLogo} alt="" />
              <span className="logo-text">FREIGHT</span>
            </div>
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="text" name="" id="" placeholder="Search" />
              <FiSearch style={{ marginRight: "15px", color: "white" }} />
            </form>
          </div>
          {/* Menu Icon */}
          <AiOutlineMenu
            className="mobile_menu"
            onClick={() => {
              setOpenMenu(true);
            }}
          />

          <div className="ctas">
            <AiOutlineSearch
              className="mobile_search"
              style={{ marginRight: "15px", color: "white", fontSize: "24px" }}
            />
            <a href="/#" className="request-quote">
              Request Quote
            </a>
            <a href="/#" className="book-shipment">
              Book Shipment
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {console.log(openMenu)}{" "}
        <div className={`menu-overlay ${openMenu ? "open-menu" : ""}`}>
          <div className={`menu ${openMenu ? "menu-active" : "menu-inactive"}`}>
            <AiOutlineCloseCircle
              className="close_menu"
              onClick={() => {
                setOpenMenu(false);
              }}
            />
            <div className="mobile_form">
              <form
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input type="text" name="" id="" placeholder="Search" />
                <FiSearch style={{ marginRight: "15px", color: "white" }} />
              </form>
            </div>
            <br />
            <div className="mobile_menu ctas">
              <AiOutlineSearch
                className="mobile_search"
                style={{
                  marginRight: "15px",
                  color: "white",
                  fontSize: "24px"
                }}
              />
              <div className="call-to-action">
                <h4>Call To Action</h4>

                <div className="ctas_mobile">
                  <a href="/#" className="request-quote">
                    Request Quote
                  </a>
                  <a href="/#" className="book-shipment">
                    Book Shipment
                  </a>
                </div>
              </div>
              <p style={{ color: "black", fontSize: "14px" }}>
                This page can be styled anyhow we want. This is just a
                placeholder
              </p>
            </div>{" "}
          </div>
        </div>
      </header>
    </>
  );
}
