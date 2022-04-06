import React from "react";
import classes from "./CheckboxField.module.scss";

const CheckboxField = ({ value, fn, label, id }) => {
  return (
    <div className={classes["checkbox-wrapper"]}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={value} onChange={fn} />
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
