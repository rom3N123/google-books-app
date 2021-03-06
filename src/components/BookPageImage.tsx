import React from "react";
import styled from "styled-components/macro";
import { Thumbnail } from ".";
import { IBookImages } from "../interfaces";

const BookPageImage: React.FC<
   IBookImages & React.HTMLAttributes<HTMLDivElement>
> = ({ thumbnail, thumbnailAlt, ...props }) => {
   return (
      <Wrapper {...props}>
         <Thumbnail
            height="300px"
            src={thumbnail || ""}
            alt={thumbnailAlt || "No alt message"}
         />
      </Wrapper>
   );
};

export default BookPageImage;

const Wrapper = styled.div`
   background-color: #f3f2f1;
   display: flex;
   justify-content: center;
   align-items: center;
`;
