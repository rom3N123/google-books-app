import React from "react";
import styled from "styled-components/macro";

interface ISelect {
   name: string;
   options: string[];
   onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Select: React.FC<ISelect> = ({ options, name, ...props }) => {
   return (
      <SelectField name={name} {...props}>
         {options.map((option) => (
            <option key={option} value={option}>
               {option}
            </option>
         ))}
      </SelectField>
   );
};

export default Select;

const SelectField = styled.select`
   padding: 8px 12px;
   font-size: 16px;
   font-weight: 600;
   letter-spacing: 1px;
`;
