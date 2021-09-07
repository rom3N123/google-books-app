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
            <Thumbnail
               className="thumbnail"
               src={imageLinks?.thumbnail || ""}
               alt={title}
            />

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
   transition: all 0.3s cubic-bezier(0, 0, 1, 1.54);
   padding: 10px;

   background-color: rgba(0, 0, 0, 0.03);

   &:hover {
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
         rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
         rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
   }
`;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
   padding: 15px;

   .thumbnail {
      cursor: pointer;
   }
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
