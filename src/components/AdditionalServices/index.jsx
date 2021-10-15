import React from "react";
import RadioButton from "../RadioButton";
import "./additionalservices.css";

export default function AdditionalServices() {
  return (
    <section className="additional-services">
      <h4>Additional Services</h4>

      <div className="services-wrapper">
        <div className="service">
          <RadioButton index={1} />
          <div>
            <h4>Export Forwarding</h4>
            <p>We handle customs clearance and documentation.</p>
          </div>
        </div>
        <div className="service">
          <RadioButton index={2} />
          <div>
            <h4>Import Customs Clearance</h4>
            <p>We handle import customs and regulatory requirments.</p>
          </div>
        </div>
        <div className="service">
          <RadioButton index={3} />
          <div>
            <h4>Cargo Insurance</h4>
            <p>Protect your cargo from logistics risks up to its full value.</p>
          </div>
        </div>
        <div className="service">
          <RadioButton index={4} />
          <div>
            <h4>Transport / Delivery</h4>
            <p>We deliver the cargo to your door step from the ports</p>
          </div>
        </div>
      </div>
    </section>
  );
}
