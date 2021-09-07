import React from "react";
import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";

function SmallButton({ children }: { children: React.ReactNode }) {
   return <Button>{children}</Button>;
}

export default SmallButton;

const Button = styled(IconButton)`
   && {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      color: #262626;
      background-color: #ffff;
      font-size: 14px;
      font-weight: 700;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
         rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
   }
`;
