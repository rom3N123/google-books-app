import React from "react";
import styled from "styled-components/macro";
import { BookItem, LoadMoreBtn } from "../components";
import { SET_BOOK } from "../redux/reducers/bookPageReducer";
import { useAppDispatch, useAppSelector } from "../redux/storeHooks";
import { IApiBook, IBook } from "../interfaces";

const BooksList: React.FC = ({ ...props }) => {
   const state = useAppSelector((state) => state);

   const dispatch = useAppDispatch();

   const handleBookClick = (apiBook: IApiBook): void => {
      const bookItem: IBook = {
         authors: apiBook.volumeInfo.authors,
         categories: apiBook.volumeInfo.categories,
         description: apiBook.volumeInfo.description,
         imageLinks: apiBook.volumeInfo.imageLinks,
         title: apiBook.volumeInfo.title,
      };

      dispatch(SET_BOOK(bookItem));
   };

   return (
      <Wrapper {...props}>
         <Inner>
            {/* Если книги есть - проходимся по ним и рендерим */}
            {!!state.books.items.length ? (
               state.books.items.map((apiBook: IApiBook) => (
                  <BookItem
                     className="book-item"
                     key={apiBook.volumeInfo.title}
                     onBookClick={() => handleBookClick(apiBook)}
                     authors={apiBook.volumeInfo.authors}
                     imageLinks={apiBook.volumeInfo.imageLinks}
                     title={apiBook.volumeInfo.title}
                     description={apiBook.volumeInfo.description}
                     categories={apiBook.volumeInfo.categories}
                  />
               ))
            ) : (
               <p>Здесь будут отображаться книги</p>
            )}
         </Inner>

         {/* Если книги есть и книги загружаются - отображаем индикатор, нет - кнопку  */}
         {!!state.books.items.length &&
            (state.fetchStatus.addBooksStatus ? (
               <Loading>Загрузка..</Loading>
            ) : (
               <ButtonWrapper>
                  <LoadMoreBtn />
               </ButtonWrapper>
            ))}
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

   gap: 20px;
   flex: 1 1;

   @media (min-width: 769px) {
      .book-item {
         flex-basis: calc(100% / 4 - 20px);
      }
   }

   @media (max-width: 768px) {
      .book-item {
         flex: 1 0 50%;
      }
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
