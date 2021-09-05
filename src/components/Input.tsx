import React from "react";
import styled from "styled-components/macro";
import { Input as InputInterface } from "../interfaces";

const Input: React.FC<InputInterface> = ({ ...props }) => {
   return <InputField {...props} />;
};

export default Input;

const InputField = styled.input`
   border-radius: 22px;
   padding: 12px;
   width: 100%;
   font-size: 16px;
`;
