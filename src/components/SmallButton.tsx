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
   backgroundColor = "transparent",
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
            font-weight: 600;
            transition: all .2s ease;
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
