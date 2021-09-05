import React from "react";
import styled from "styled-components/macro";
import { IBook } from "../interfaces";

const BookPageInfo: React.FC<IBook> = ({
   authors,
   categories,
   title,
   description,
   imageLinks,
   ...props
}) => {
   return (
      <Wrapper {...props}>
         <Inner>
            <Categories>
               {(categories && categories.join("/")) || "Без категории"}
            </Categories>

            <Title>{title}</Title>

            <Authors>
               {(authors && authors.join(", ")) || "Авторы неизвестны"}
            </Authors>

            <Description>{description || "Описание отсутствует"}</Description>
         </Inner>
      </Wrapper>
   );
};

export default BookPageInfo;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;

   & > *:not(:last-child) {
      margin-bottom: 20px;
   }
`;

const Categories = styled.p``;

const Title = styled.h3``;

const Authors = styled.p``;

const Description = styled.p`
   line-height: 1.25;
`;
