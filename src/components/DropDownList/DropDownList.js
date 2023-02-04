import React from "react";
import { Select, Paragraph } from "./DropDownList.style";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Paragraph> You selected {value}</Paragraph>
    </>
  );
};

export default Dropdown;
