import React from "react";
import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";

interface ISmallButton {
   backgroundColor?: string;
   width?: string;
   height?: string;
   childrenColor?: string;
   hoverBackgroundColor?: string;
   hoverColor?: string;
}

function SmallButton({
   children,
   backgroundColor = "#fff",
   width = "24px",
   height = "24px",
   childrenColor = "#262626",
   hoverBackgroundColor = "#f5efef",
   hoverColor = "none",
   onClick,
}: ISmallButton & {
   children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
   return (
      <Button
         onClick={onClick}
         width={width}
         height={height}
         backgroundColor={backgroundColor}
         childrenColor={childrenColor}
         hoverBackgroundColor={hoverBackgroundColor}
         hoverColor={hoverColor}
      >
         {children}
      </Button>
   );
}

export default SmallButton;

const Button = styled(IconButton)`
   && {
      ${({
         backgroundColor,
         childrenColor,
         width,
         height,
         hoverBackgroundColor,
         hoverColor,
      }: ISmallButton) => `
            width: ${width};
            height: ${height};
            border-radius: 50%;
            color: #262626;
            background-color: ${backgroundColor};
            font-size: 14px;
            font-weight: 700;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
               rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

               & > *:first-child {
                  color: ${childrenColor};
               }

               &:hover {
                  color: ${hoverColor};
                  background-color: ${hoverBackgroundColor};
               }
         `}
   }
`;
