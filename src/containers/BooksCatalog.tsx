import React from "react";
import styled from "styled-components/macro";
import { Fade, Grow } from "@material-ui/core";
import { BooksList, Pagination } from ".";
import { FlashMessage, Loading } from "../components";
import { useAppSelector } from "../redux/storeHooks";
import { useLocation } from "react-router-dom";
import { IFlashMessageParams } from "../interfaces";

const Books: React.FC = () => {
   const state = useAppSelector((state) => state);

   const fetchStatus = useAppSelector((state) => state.fetchStatus);

   const location = useLocation<{ flashMessage: IFlashMessageParams }>();

   // Flash message state

   const [flashMessage, setFlashMessage] =
      React.useState<IFlashMessageParams | null>(null);

   React.useEffect(() => {
      if (location.state && location.state.flashMessage) {
         setFlashMessage(location.state.flashMessage);
      }
   }, [location.state]);

   return (
      <Wrapper>
         {flashMessage && (
            <FlashMessage
               type={flashMessage.type}
               message={flashMessage.message}
               open={!!flashMessage}
               setOpen={setFlashMessage}
            />
         )}

         <Inner>
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
               <Grow timeout={0} in={!state.fetchStatus.setBooksStatus}>
                  <PaginationWrapper>
                     <Pagination />
                  </PaginationWrapper>
               </Grow>
            )}
         </Inner>
      </Wrapper>
   );
};

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

const Inner = styled.div`
   padding: 15px;
`;

const SearchResult = styled.h3`
   text-align: center;
   margin-bottom: 20px;
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
   margin-top: 50px;
`;
