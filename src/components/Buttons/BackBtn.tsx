import React, { HTMLAttributes } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "..";

const BackBtn: React.FC<HTMLAttributes<HTMLButtonElement & HTMLDivElement>> = ({
   ...props
}) => {
   return (
      <IconButton width="40px" height="40px" {...props}>
         <ArrowBackIcon fontSize="large" />
      </IconButton>
   );
};

export default BackBtn;
