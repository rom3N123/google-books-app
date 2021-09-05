import React from "react";
import styled from "styled-components/macro";

import noThumbnail from "../assets/no-thumbnail.jpg";
import { IBookImages } from "../interfaces";

const BookPageImage: React.FC<IBookImages> = ({
   thumbnail,
   thumbnailAlt,
   ...props
}) => {
   return (
      <Wrapper {...props}>
         <Image src={thumbnail} alt={thumbnailAlt} />
      </Wrapper>
   );
};

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
