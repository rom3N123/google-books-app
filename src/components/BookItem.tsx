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
      <Wrapper onClick={onBookClick} {...props}>
         <Inner>
            <Thumbnail src={imageLinks?.thumbnail} alt={title} />

            <BookInfo>
               <Category>{categories && categories[0]}</Category>

               <Title>{title}</Title>

               <Author>{authors && authors.join(", ")}</Author>
            </BookInfo>
         </Inner>
      </Wrapper>
   );
};

export default BookItem;

const Wrapper = styled.div`
   background-color: #fff;

   transition: all 0.3s ease;
   border-radius: 6px;
   border: 1px solid #ccc;
   padding: 10px;

   cursor: pointer;

   &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   }
`;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
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
