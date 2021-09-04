import React from "react";
import styled from "styled-components/macro";
import { BookItem, Container } from "../components";

function BooksList() {
   return (
      <Wrapper>
         <Container>
            <Inner>
               <BookItem />
            </Inner>
         </Container>
      </Wrapper>
   );
}

export default BooksList;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-wrap: wrap;
`;
