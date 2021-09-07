import React from "react";
import styled from "styled-components/macro";
import { BooksList, Pagination } from ".";
import { Container } from "../components";
import { useAppSelector } from "../redux/storeHooks";

const Books: React.FC = () => {
   const state = useAppSelector((state) => state);

   const fetchStatus = useAppSelector((state) => state.fetchStatus);

   return (
      <Wrapper>
         <Container>
            {fetchStatus.setBooksStatus ? (
               <h1>Загрузка..</h1>
            ) : (
               <>
                  {!!state.books.items.length && (
                     <SearchResult>
                        Found {state.books.totalItems} results
                     </SearchResult>
                  )}

                  <BooksList />
               </>
            )}

            {!!state.books.items.length && (
               <PaginationWrapper>
                  <Pagination />
               </PaginationWrapper>
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

const PaginationWrapper = styled.div`
   margin: 20px 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;
