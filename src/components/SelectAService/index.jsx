import React from "react";
import { ImTruck } from "react-icons/im";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";

import "./selectAService.css";
export default function SelectAService() {
  const selectService = (e) => {
    let index = e.target.getAttribute("data-index");
    index = +index;
    let iconBoxes = document.querySelectorAll(".icon-box");
    for (const iconBox of iconBoxes) {
      iconBox.classList.remove("selected");
    }
    let iconBox = iconBoxes[index];
    iconBox.classList.add("selected");
  };

  return (
    <>
      <section className="select-a-service">
        <h4>Select a service</h4>

        <div className="icon-boxes">
          <div
            className="icon-box selected"
            data-index="0"
            onClick={(e) => {
              selectService(e);
            }}
          >
            <span className="text" data-index="0">
              Air Freight
            </span>
            <span className="icon-wrapper-airplane" data-index="0">
              <MdAirplanemodeActive style={{ fontSize: "70px" }} fill="white" />
            </span>
          </div>

          <div
            className="icon-box"
            data-index="1"
            onClick={(e) => {
              selectService(e);
            }}
          >
            <span className="text" data-index="1">
              Sea Freight
            </span>
            <span className="icon-wrapper-ship" data-index="1">
              <FaShip fill="#828689" style={{ fontSize: "55px" }} />{" "}
            </span>
          </div>
          <div
            className="icon-box"
            data-index="2"
            onClick={(e) => {
              selectService(e);
            }}
          >
            <span className="text" data-index="2">
              Inland (Truck <br /> and Barge)
            </span>
            <span className="icon-wrapper-truck" data-index="2">
              <ImTruck style={{ fontSize: "45px" }} />
            </span>
          </div>
          <div
            className="icon-box"
            data-index="3"
            onClick={(e) => {
              selectService(e);
            }}
          >
            <span className="text" data-index="3">
              Custom Clearance
            </span>
            <span className="icon-wrapper-custom" data-index="3">
              <GiPoliceOfficerHead fill="#828689" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
