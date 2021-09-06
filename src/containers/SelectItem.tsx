import React from "react";
import styled from "styled-components/macro";
import { Select } from "../components";
import { ISelect } from "../interfaces";

interface ISelectItem {
   id: string;
   labelTitle: string;
}

const SelectItem: React.FC<ISelect & ISelectItem> = ({
   onChange,
   options,
   name,
   id,
   labelTitle,
}) => {
   return (
      <SelectWrapper>
         <Label htmlFor={id}>{labelTitle}</Label>

         <SelectWrapper id={id}>
            <Select onChange={onChange} options={options} name={name} />
         </SelectWrapper>
      </SelectWrapper>
   );
};

export default SelectItem;

const Label = styled.label`
   color: #fff;
   font-weight: 600;
   font-size: 18px;
   margin-right: 10px;
`;

const SelectWrapper = styled.div`
   display: flex;
   align-items: center;
`;
