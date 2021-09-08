import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from ".";

interface IFlashMessageProps {
   type: "error" | "info" | "success" | "warning";
   message: string;
   errorCode?: number;
   open: boolean;
}

const FlashMessage: React.FC<IFlashMessageProps> = ({
   type,
   message,
   errorCode,
   open,
}) => {
   return (
      <Snackbar
         anchorOrigin={{
            vertical: "top",
            horizontal: "left",
         }}
         open={open}
         autoHideDuration={5000}
      >
         <Alert severity={type}>{`${message}. ${
            errorCode ? "Код ошибки : " + errorCode : ""
         }`}</Alert>
      </Snackbar>
   );
};

export default FlashMessage;
