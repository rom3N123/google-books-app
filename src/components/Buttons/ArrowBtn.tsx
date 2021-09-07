import React, { ReactElement } from "react";
import { IconButton } from "..";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface IArrowBtnProps {
   direction?: "left" | "right";
}

function ArrowBtn({
   direction = "left",
   ...props
}: IArrowBtnProps & React.HTMLAttributes<HTMLButtonElement>): ReactElement {
   return (
      <IconButton {...props}>
         {direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
   );
}

export default ArrowBtn;
