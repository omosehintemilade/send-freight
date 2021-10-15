import React from "react";
import "./radiobutton.css";
export default function RadioButton({ index }) {
  const toggle = (e) => {
    let container = document.querySelectorAll(".toggle-button");

    // console.log(container, index);
    container = container[index];
    // console.log(container);

    // return;

    const toggle = container.querySelector(".button-inner");

    if (toggle.classList.contains("active")) {
      toggle.classList.remove("active");
      container.classList.remove("bg-active");
    } else {
      container.classList.add("bg-active");
      toggle.classList.add("active");
    }
  };
  return (
    <div>
      {/* radio button */}
      <div
        class="toggle-button"
        onClick={(e) => {
          toggle(e);
        }}
      >
        <div className="button-inner"></div>
      </div>
      {/* end */}
    </div>
  );
}
