import React, { useState, useEffect } from "react";
import Radiobutton from "../RadioButton";
import "./cargodetails.css";
export default function CargoDetails() {
  const tabs_constants = {
    total_dimensions: "TOTAL_DIMENSIONS",
    package_details: "PACKAGE_DETAILS"
  };
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabName, setActiveTabName] = useState(
    tabs_constants.total_dimensions
  );

  useEffect(() => {
    const tabs = document.querySelectorAll(".tabs button");
    console.log(tabs, activeTab);
    for (const tab of tabs) {
      tab.classList.remove("active-tab");
    }
    tabs[activeTab].classList.add("active-tab");
  }, [activeTab]);
  return (
    <>
      <section>
        <div>
          <div className="cargo-toggle">
            <h4>Cargo Details</h4>
            <div className="toggle-text">
              <Radiobutton index={0} />
              <span className="text">
                <strong>Dangerous Chemicals</strong> (ex. Chemicals, Batteries)
              </span>
            </div>
          </div>
          <div className="tabs-wrapper">
            <span className="tabs">
              <button
                data-index="0"
                onClick={(e) => {
                  const index = e.target.getAttribute("data-index");
                  setActiveTab(+index);

                  setActiveTabName(tabs_constants.total_dimensions);
                }}
              >
                Total Dimensions
              </button>
              <button
                data-index="1"
                onClick={(e) => {
                  const index = e.target.getAttribute("data-index");
                  setActiveTab(+index);
                  setActiveTabName(tabs_constants.package_details);
                }}
              >
                Package Details
              </button>
            </span>
          </div>
          {activeTabName === tabs_constants.total_dimensions ? (
            <div className="cargo-form">
              <form action="">
                <fieldset>
                  <legend>Total Volume</legend>
                  <input type="text" />
                  <span className="text">cbm</span>
                </fieldset>
                <br />
                <fieldset>
                  <legend>Total Weight</legend>
                  <input type="text" />
                  <span className="text">kg</span>
                </fieldset>
              </form>
            </div>
          ) : (
            <p>Package Details page goes here</p>
          )}
        </div>
      </section>
    </>
  );
}
