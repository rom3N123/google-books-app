import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from ".";

interface IFlashMessageProps {
   type: "error" | "info" | "success" | "warning";
   message: string;
   open: boolean;
   setOpen(flashMessage: null): void;
}

const FlashMessage: React.FC<IFlashMessageProps> = ({
   type,
   message,
   open,
   setOpen,
}) => {
   return (
      <Snackbar
         anchorOrigin={{
            vertical: "top",
            horizontal: "left",
         }}
         open={open}
         autoHideDuration={5000}
         onClose={() => setOpen(null)}
      >
         <Alert severity={type}>{message}</Alert>
      </Snackbar>
   );
};

export default FlashMessage;
