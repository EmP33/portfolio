import React from "react";
import classes from "./FormInput.module.scss";

const FormInput = ({ defaultValue, label, id, valueRef }) => {
  return (
    <div className={classes["form-input"]}>
      <label htmlFor={id}>{label}</label>
      <input type="text" defaultValue={defaultValue} ref={valueRef} id={id} />
    </div>
  );
};

export default FormInput;
