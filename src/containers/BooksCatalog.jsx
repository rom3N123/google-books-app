import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { BooksList } from ".";
import { Container } from "../components";

function Books() {
   const state = useSelector((state) => state);

   return (
      <Wrapper>
         <Container>
            {state.fetchStatus && !state.books ? (
               <h1>Загрузка..</h1>
            ) : (
               <>
                  {state.books && (
                     <SearchResult>
                        Found {state.books.totalItems} results
                     </SearchResult>
                  )}

                  <BooksList />
               </>
            )}
         </Container>
      </Wrapper>
   );
}

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 20px;
`;

const SearchResult = styled.h3`
   text-align: center;
`;
