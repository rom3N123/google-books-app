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
                  thumbnail={
                     (book.item!.imageLinks &&
                        book.item!.imageLinks.thumbnail) ||
                     ""
                  }
                  thumbnailAlt={book.item!.title}
               />

               <BookPageInfo
                  // className="book-page-info"
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

   .book-page-image {
      flex: 1 0 40%;
   }

   .book-page-info {
      flex: 0 1 60%;
   }
`;

const ItemsWrapper = styled.div`
   display: flex;
   align-items: center;
`;
