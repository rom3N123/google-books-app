import React from "react";
import styled from "styled-components/macro";

function Select({ options, ...props }) {
   return (
      <SelectField {...props}>
         {options.map((option) => (
            <option key={option} value={option}>
               {option}
            </option>
         ))}
      </SelectField>
   );
}

export default Select;

const SelectField = styled.select`
   padding: 8px 12px;
   font-size: 16px;
   font-weight: 600;
   letter-spacing: 1px;
`;
