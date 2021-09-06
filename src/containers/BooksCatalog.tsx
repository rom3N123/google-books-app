import React from "react";
import styled from "styled-components/macro";
import { BooksList } from ".";
import { Container } from "../components";
import { useAppSelector } from "../redux/storeHooks";

const Books: React.FC = () => {
   const books = useAppSelector((state) => state.books);

   const fetchStatus = useAppSelector((state) => state.fetchStatus);

   return (
      <Wrapper>
         <Container>
            {fetchStatus.setBooksStatus ? (
               <h1>Загрузка..</h1>
            ) : (
               <>
                  {!!books.items.length && (
                     <SearchResult>
                        Found {books.totalItems} results
                     </SearchResult>
                  )}

                  <BooksList />
               </>
            )}
         </Container>
      </Wrapper>
   );
};

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 20px;
`;

const SearchResult = styled.h3`
   text-align: center;
`;
