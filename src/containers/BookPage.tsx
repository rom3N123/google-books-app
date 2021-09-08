import React from "react";
import styled from "styled-components/macro";
import { BookPageImage, BookPageInfo, BookPageHeader } from ".";
import { IBookState } from "../redux/reducers/bookPageReducer";
import { useAppSelector } from "../redux/storeHooks";

const BookPage: React.FC = () => {
   const book = useAppSelector((state): IBookState => state.book);

   return (
      <Wrapper>
         <Inner>
            <BookPageHeader />

            <ItemsWrapper>
               <BookPageImage
                  className="book-page-thumbnail"
                  thumbnail={
                     (book.item!.imageLinks &&
                        book.item!.imageLinks.thumbnail) ||
                     ""
                  }
                  thumbnailAlt={book.item!.title}
               />

               <BookPageInfo
                  className="book-page-info"
                  authors={book.item!.authors}
                  categories={book.item!.categories}
                  title={book.item!.title}
                  description={book.item!.description}
                  imageLinks={book.item!.imageLinks}
               />
            </ItemsWrapper>
         </Inner>
      </Wrapper>
   );
};

export default BookPage;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
`;

const ItemsWrapper = styled.div`
   display: flex;
   align-items: stretch;

   @media (min-width: 768px) {
      .book-page-thumbnail {
         flex: 1 0 40%;
      }

      .book-page-info {
         flex: 0 1 60%;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      .book-page-thumbnail {
         width: 100%;
      }
   }
`;
