import React from "react";
import styled from "styled-components/macro";

function BookItem({ ...props }) {
   return (
      <Wrapper>
         <Inner></Inner>
      </Wrapper>
   );
}

export default BookItem;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
`;
