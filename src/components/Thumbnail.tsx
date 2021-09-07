import React from "react";
import styled from "styled-components/macro";

interface IThumbnail {
   src: string;
   alt: string;
   width?: string;
   height?: string;
}

const Thumbnail: React.FC<IThumbnail & React.HTMLAttributes<HTMLDivElement>> =
   ({ src, alt, height = "auto", width = "auto", ...props }) => {
      return (
         <ThumbnailIcon
            src={src}
            alt={alt}
            height={height}
            width={width}
            {...props}
         />
      );
   };

export default Thumbnail;

const ThumbnailIcon = styled.img`
   ${({ width, height }) => `  
      width: ${width}; 
      height: ${height};
      max-height: 100%;
      object-fit: contain;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
         rgba(0, 0, 0, 0.23) 0px 6px 6px;`}
`;
