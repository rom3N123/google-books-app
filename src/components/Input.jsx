import React from "react";
import styled from "styled-components";

function Input({ ...props }) {
   return <InputField {...props} />;
}

export default Input;

const InputField = styled.input`
   border-radius: 22px;
   padding: 6px 12px;
   width: 100%;
   font-size: 16px;
`;
