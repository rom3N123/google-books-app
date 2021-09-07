import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";

function BackBtn({ ...props }) {
   return (
      <IconButton size="small">
         <ArrowBackIcon fontSize="large" />
      </IconButton>
   );
}

export default BackBtn;
