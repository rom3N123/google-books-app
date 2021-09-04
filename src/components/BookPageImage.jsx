import React from "react";
import styled from "styled-components/macro";

import noThumbnail from "../assets/no-thumbnail.jpg";

function BookPageImage({ bookInfo, ...props }) {
   return (
      <Wrapper {...props}>
         <Image
            src={
               (bookInfo.imageLinks && bookInfo.imageLinks.thumbnail) ||
               noThumbnail
            }
            alt={bookInfo.title}
         />
      </Wrapper>
   );
}

export default BookPageImage;

const Wrapper = styled.div`
   background-color: #ccc;
   padding: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Image = styled.img`
   height: 300px;
   object-fit: contain;
`;
