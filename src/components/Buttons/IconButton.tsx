import React from "react";
import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";

interface ISmallButtonStyles {
   backgroundColor?: string;
   children: React.ReactNode;
   width?: string;
   height?: string;
   childrenColor?: string;
   hoverBackgroundColor?: string;
   hoverColor?: string;
   fontSize?: string;
   type?: "button" | "submit" | undefined;
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
   fontSize = "0.95rem",
   type,
   className,
}: ISmallButtonStyles &
   React.HTMLAttributes<HTMLButtonElement | HTMLDivElement>) {
   return (
      <Button
         onClick={onClick}
         width={width}
         height={height}
         backgroundColor={backgroundColor}
         childrenColor={childrenColor}
         hoverBackgroundColor={hoverBackgroundColor}
         hoverColor={hoverColor}
         type={type}
         fontSize={fontSize}
         className={className}
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
         fontSize,
      }: ISmallButtonStyles) => `
            width: ${width};
            height: ${height};
            border-radius: 50%;
            color: #262626;
            background-color: ${backgroundColor};
            font-weight: 600;
            font-size: ${fontSize};
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
