import React, { useEffect } from "react";
import "./patientDetails.scss";
import PatientInfo from "./patientInfo";

const ConfirmPopup = (props) => {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        props.onConfirm();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="popup">
      <button onClick={props.close} className="close">
        {" "}
        &times;
      </button>
      <div className="popup-content">
        <span className="warning">
          Patient details will be updated with ABDM record. This action cannot
          be undone
        </span>
        <p>
          <PatientInfo patient={props.selectedPatient} />
        </p>
        <button type="submit" onClick={props.onConfirm}>
          {" "}
          Confirm Selection
        </button>
      </div>
    </div>
  );
};
export default ConfirmPopup;
