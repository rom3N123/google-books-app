import React from "react";
import styled from "styled-components/macro";

function Input({ children = null, ...props }) {
   return <InputField {...props} />;
}

export default Input;

const InputField = styled.input`
   border-radius: 22px;
   padding: 12px;
   width: 100%;
   font-size: 16px;
`;
