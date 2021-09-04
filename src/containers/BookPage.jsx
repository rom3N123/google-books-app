import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { BookPageImage, BookPageInfo } from "../components";

function BookPage() {
   const book = useSelector((state) => state.book);

   return (
      <Wrapper>
         <Inner>
            <BookPageImage imageSrc={""} imageAlt={"hello"} />

            <BookPageInfo bookInfo={{}} />
         </Inner>
      </Wrapper>
   );
}

export default BookPage;

const Wrapper = styled.div``;

const Inner = styled.div``;
