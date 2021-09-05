import React from "react";
import styled from "styled-components/macro";
import { BookItem, LoadMoreBtn } from "../components";
import { setBook } from "../redux/actions/book";
import { useAppDispatch, useAppSelector } from "../redux/storeHooks";
import { IApiBook, IBook } from "../interfaces";

const BooksList: React.FC = ({ ...props }) => {
   const state = useAppSelector((state) => state);

   const dispatch = useAppDispatch();

   const handleBookClick = (apiBook: IApiBook) => {
      const bookItem: IBook = {
         authors: apiBook.volumeInfo.authors,
         categories: apiBook.volumeInfo.categories,
         description: apiBook.volumeInfo.description,
         thumbnails: apiBook.volumeInfo.imageLinks,
         title: apiBook.volumeInfo.title,
      };

      dispatch(setBook(bookItem));
   };

   return (
      <Wrapper {...props}>
         <Inner>
            {state.books ? (
               state.books.items.map((apiBook: IApiBook) => (
                  <BookItem
                     onBookClick={() => handleBookClick(apiBook)}
                     // className="book-item"
                     authors={apiBook.volumeInfo.authors}
                     thumbnails={apiBook.volumeInfo.imageLinks}
                     title={apiBook.volumeInfo.title}
                     description={apiBook.volumeInfo.description}
                     categories={apiBook.volumeInfo.categories}
                  />
               ))
            ) : (
               <p>Здесь будут отображаться книги</p>
            )}
         </Inner>

         {state.books &&
            ((!state.fetchStatus && (
               <ButtonWrapper>
                  <LoadMoreBtn />
               </ButtonWrapper>
            )) || <Loading>Загрузка..</Loading>)}
      </Wrapper>
   );
};

export default BooksList;

const Wrapper = styled.div`
   padding: 20px 0;
`;

const Inner = styled.div`
   display: flex;
   flex-wrap: wrap;

   gap: 25px;

   .book-item {
      flex: 0 0 30%;
   }
`;

const ButtonWrapper = styled.div`
   text-align: center;
   margin-top: 20px;
`;

const Loading = styled.p`
   text-align: center;
   line-height: 1.5;
   font-size: 1.3rem;
   margin: 10px 0;
`;