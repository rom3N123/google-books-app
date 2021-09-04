import React from "react";
import styled from "styled-components/macro";
import { BooksList } from ".";

function Books() {
   return (
      <Wrapper>
         <h4>Found 500 results</h4>

         <BooksList />
      </Wrapper>
   );
}

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;
