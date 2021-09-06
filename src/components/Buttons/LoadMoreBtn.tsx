import React from "react";
import styled from "styled-components/macro";
import { useApi } from "../../hooks";

function LoadMoreBtn() {
   const { loadMoreBooks } = useApi();

   return <Button onClick={loadMoreBooks}>Load more</Button>;
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
