import React from "react";
import styled from "styled-components/macro";

function BookPageImage({ imageSrc, imageAlt }) {
   return (
      <Wrapper>
         <Image src={imageSrc} alt={imageAlt} />
      </Wrapper>
   );
}

export default BookPageImage;

const Wrapper = styled.div`
   background-color: #ccc;
   padding: 20px;
`;

const Image = styled.img`
   width: 500px;
   height: 500px;
   object-fit: contain;
`;
