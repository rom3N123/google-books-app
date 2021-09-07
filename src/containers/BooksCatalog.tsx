import React from "react";
import styled from "styled-components/macro";
import { Fade } from "@material-ui/core";
import { BooksList, Pagination } from ".";
import { Container, Loading } from "../components";
import { useAppSelector } from "../redux/storeHooks";

const Books: React.FC = () => {
   const state = useAppSelector((state) => state);

   const fetchStatus = useAppSelector((state) => state.fetchStatus);

   return (
      <Wrapper>
         <Container>
            {fetchStatus.setBooksStatus ? (
               <LoadingWrapper>
                  <Loading />
               </LoadingWrapper>
            ) : (
               <>
                  {!!state.books.items.length && (
                     <SearchResult>
                        Found {state.books.totalItems} results
                     </SearchResult>
                  )}

                  <Fade in={true}>
                     <BooksList />
                  </Fade>
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

const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
