import React from "react";
import styled from "styled-components/macro";
import { BookItem } from "../components";
import { SET_BOOK } from "../redux/reducers/bookPageReducer";
import { useAppDispatch, useAppSelector } from "../redux/storeHooks";
import { IApiBook, IBook } from "../interfaces";
import { useHistory } from "react-router";

const BooksList: React.FC = ({ ...props }) => {
   const state = useAppSelector((state) => state);

   const history = useHistory();

   const dispatch = useAppDispatch();

   const handleBookClick = (apiBook: IApiBook): void => {
      // const bookItem: IBook = {
      //    authors: apiBook.volumeInfo.authors,
      //    categories: apiBook.volumeInfo.categories,
      //    description: apiBook.volumeInfo.description,
      //    imageLinks: apiBook.volumeInfo.imageLinks,
      //    title: apiBook.volumeInfo.title,
      // };
      // dispatch(SET_BOOK(bookItem));

      history.push("/books/" + apiBook.id);
   };

   return (
      <Wrapper {...props}>
         {!!state.books.items.length ? (
            <Inner>
               {state.books.items.map((apiBook: IApiBook) => (
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
               ))}
            </Inner>
         ) : (
            <Label>Here will be shown found books..</Label>
         )}
      </Wrapper>
   );
};

export default BooksList;

const Wrapper = styled.div`
   padding: 0 20px;
`;

const Inner = styled.div`
   display: flex;
   flex-wrap: wrap;

   gap: 30px;
   flex: 1 1;

   @media (min-width: 769px) {
      .book-item {
         flex-basis: calc(100% / 6 - 25px);
      }
   }

   @media (max-width: 768px) {
      .book-item {
         flex: 1 0 50%;
      }
   }
`;

const Label = styled.h3`
   text-align: center;
   font-size: 1.4rem;
   font-weight: 400;
   line-height: 1.5;
`;
