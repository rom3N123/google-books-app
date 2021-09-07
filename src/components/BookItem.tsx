import React from "react";
import styled from "styled-components/macro";
import { Thumbnail } from ".";

import { IBook } from "../interfaces";

interface IBookWithClick extends IBook {
   onBookClick(): void;
}

const BookItem: React.FC<
   IBookWithClick & React.HTMLAttributes<HTMLDivElement>
> = ({
   authors,
   categories,
   description,
   imageLinks,
   title,
   onBookClick,
   ...props
}) => {
   return (
      <Wrapper {...props}>
         <Inner>
            <ThumbnailWrapper>
               <Thumbnail
                  onClick={onBookClick}
                  className="thumbnail"
                  src={imageLinks?.thumbnail || ""}
                  alt={title}
               />
            </ThumbnailWrapper>

            <BookInfo>
               <Category>{categories && categories[0]}</Category>

               <Title onClick={onBookClick}>{title}</Title>

               <Author>{authors && authors.join(", ")}</Author>
            </BookInfo>
         </Inner>
      </Wrapper>
   );
};

export default BookItem;

const Wrapper = styled.div`
   background-color: #fff;
   background-color: rgba(0, 0, 0, 0.03);
`;

const Inner = styled.div`
   padding: 25px 15px 15px;
   display: flex;
   flex-direction: column;

   .thumbnail {
      cursor: pointer;
      position: relative;
      transition: all 0.2s cubic-bezier(0, 0, 1, 1.54);

      &:hover {
         transform: scale(1.15);
      }
   }
`;

const ThumbnailWrapper = styled.div`
   height: 180px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const BookInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 25px;
`;

const Title = styled.h4`
   margin: 5px 0;
   font-size: 1.25rem;
   font-weight: 600;

   cursor: pointer;
`;

const Category = styled.p`
   text-decoration: underline;
   font-size: 1.12rem;
   line-height: 1.5;
`;

const Author = styled.p`
   color: #262626;
   font-size: 1.1rem;
   font-style: italic;
`;
