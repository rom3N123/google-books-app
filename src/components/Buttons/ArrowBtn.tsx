import React, { ReactElement } from "react";
import SmallButton from "../SmallButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface IArrowBtnProps {
   direction?: "left" | "right";
}

function ArrowBtn({
   direction = "left",
   ...props
}: IArrowBtnProps & React.HTMLAttributes<HTMLDivElement>): ReactElement {
   return (
      <SmallButton
         {...props}
         childrenColor="#fff"
         backgroundColor="#262626"
         hoverBackgroundColor="#555454"
         {...props}
      >
         {direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </SmallButton>
   );
}

export default ArrowBtn;
