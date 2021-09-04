import React from "react";

import IconButton from "./IconButton";

import searchIconSvg from "../../assets/search-icon.svg";

function SearchBtn() {
   return <IconButton imageSrc={searchIconSvg} imageAlt={"Search icon"} />;
}

export default SearchBtn;
