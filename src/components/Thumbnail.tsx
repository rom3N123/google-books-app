import React from "react";
import styled from "styled-components/macro";

interface IThumbnail {
   src: string;
   alt: string;
}

const Thumbnail: React.FC<IThumbnail & { height: string }> = ({
   src,
   alt,
   height,
}) => {
   return <ThumbnailIcon src={src} alt={alt} height={height} />;
};

export default Thumbnail;

const ThumbnailIcon = styled.img`
   ${({ height }) => `   
      height: ${height ? height : "280px"};
      object-fit: contain;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
         rgba(0, 0, 0, 0.23) 0px 6px 6px;`}
`;
