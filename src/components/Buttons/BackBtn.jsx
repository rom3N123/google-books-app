import React from "react";
import IconButton from "./IconButton";

import arrowLeftIconSvg from "../../assets/left-arrow.svg";

function BackBtn() {
   return (
      <IconButton imageSrc={arrowLeftIconSvg} imageAlt={"Back arrow image"} />
   );
}

export default BackBtn;
