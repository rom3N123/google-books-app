import React from "react";
import styled from "styled-components/macro";

function LoadMoreBtn() {
   return <Button>Load more</Button>;
}

export default LoadMoreBtn;

const Button = styled.button`
   text-transform: uppercase;
   font-size: 1.2rem;
   font-weight: 600;
   letter-spacing: 1px;
   padding: 5px 10px;
   color: #fff;
   background-color: #6e6c6c;
`;
