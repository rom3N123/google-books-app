import React from "react";
import styled from "styled-components/macro";

import searchIcon from "../../assets/search-icon.svg";

function SearchBtn({ ...props }) {
   return (
      <Button {...props}>
         <Image src={searchIcon} alt="Search icon" />
      </Button>
   );
}

export default SearchBtn;

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Image = styled.img`
   width: 24px;
   height: 24px;
`;
