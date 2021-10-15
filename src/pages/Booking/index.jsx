import React from "react";
import AdditionalServices from "../../components/AdditionalServices";
import CargoDetails from "../../components/CargoDetails";
import CTAForm from "../../components/CTAForm";
import Header from "../../components/Header";
import SelectAService from "../../components/SelectAService";
import "./booking.css";
import { BsArrowLeft } from "react-icons/bs";

export default function Booking() {
  return (
    <>
      <Header />
      <div className="booking-container-outer-wrapper">
        <BsArrowLeft
          strokeWidth="1"
          style={{ fontSize: "20px", marginTop: "45px" }}
          className="arrow-back"
        />
        <div className="booking-container">
          <div className="new-booking">
            <h3>New Booking</h3>
            <p>
              Fill in the information below to get a quote or create a new
              booking
            </p>
          </div>
          <SelectAService />
          <CTAForm />
          <CargoDetails />
          <AdditionalServices />
        </div>
      </div>
    </>
  );
}
