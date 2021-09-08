import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router";
import { BookPageImage, BookPageInfo, BookPageHeader } from "../containers";
import { useApi } from "../hooks";
import { IBook } from "../interfaces";
import { Loading } from "../components";
import { Fade } from "@material-ui/core";

interface BookPageParams {
   id: string;
}

const BookPage: React.FC = () => {
   const { id } = useParams<BookPageParams>();

   const { getBookData } = useApi();

   const [book, setBook] = React.useState<IBook | null>(null);

   React.useEffect(() => {
      const fetchBookData = async () => {
         const book = await getBookData(id);

         setBook(book);
      };

      if (!book && id) {
         fetchBookData();
      }
   }, [id, book, getBookData]);

   return (
      <Wrapper>
         {book ? (
            <Inner>
               <Fade in={true} timeout={200}>
                  <BookPageHeader />
               </Fade>

               <Fade in={true} timeout={500}>
                  <ItemsWrapper>
                     <BookPageImage
                        className="book-page-thumbnail"
                        thumbnail={
                           (book.imageLinks && book.imageLinks.thumbnail) || ""
                        }
                        thumbnailAlt={book.title}
                     />

                     <BookPageInfo
                        className="book-page-info"
                        authors={book.authors}
                        categories={book.categories}
                        title={book.title}
                        description={book.description}
                        imageLinks={book.imageLinks}
                     />
                  </ItemsWrapper>
               </Fade>
            </Inner>
         ) : (
            <LoadingWrapper>
               <Loading />
            </LoadingWrapper>
         )}
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

const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 40px 0;
`;
