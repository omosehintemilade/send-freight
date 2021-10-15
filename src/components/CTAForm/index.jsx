import React from "react";
import { BsInfoCircle, BsFillCalendarDateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ReactTooltip from "react-tooltip";

import "./ctaform.css";

export default function CTAForm() {
  return (
    <>
      <section className="ctaform">
        <BsInfoCircle
          className="info-icon"
          data-tip="Our company's info goes in here"
          data-background-color="#0746a7"
        />
        <ReactTooltip />
        <form action="">
          <div className="first-line">
            <div className="imp-exp">
              <button className="import-btn">Import</button>
              <button className="export-btn">Export</button>
            </div>

            <div className="icon-input">
              <IoLocationSharp style={{ marginRight: "5px" }} />
              <span className="text-input-wrapper">
                <span className="text">From</span>
                <input type="text" placeholder="City or port" />
              </span>
            </div>

            <div className="icon-input">
              <IoLocationSharp style={{ marginRight: "5px" }} />
              <span className="text-input-wrapper">
                <span className="text">To</span>
                <input type="text" placeholder="City or port" />
              </span>
            </div>
          </div>
          <div className="second-line">
            <div className="icon-input">
              <span>
                <label htmlFor="ready_date">
                  <BsFillCalendarDateFill style={{ marginRight: "5px" }} />
                  <span className="text">Ready Date</span>
                </label>
              </span>
              <input type="text" id="ready_date" className="width-half" />
            </div>
            <div className="icon-input flex-none flex-one">
              <select name="incoterms" id="incoterms" className="incoterms">
                <option value="Incoterms">Incoterms</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
            <div className="icon-input flex-one">
              <span className="text">Total Cargo Value</span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
