import React from "react";
import { Select } from "./DropDownList.style";

const Dropdown = ({ value, options, onChange }) => {
    
    return (            
          
        <>
            <Select value={value} onChange={onChange}>

                {options.map((option) => (

                    <option value={option.value}>{option.label}</option>

                ))}

            </Select>

            <p> You selected {value}</p>
            
            
        </>
   
    );
   
   };
   
   export default Dropdown;