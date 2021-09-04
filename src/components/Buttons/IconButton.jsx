import React from "react";
import styled from "styled-components/macro";

function IconButton({ imageSrc, imageAlt, ...props }) {
   return (
      <Button {...props}>
         <Image src={imageSrc} alt={imageAlt} />
      </Button>
   );
}

export default IconButton;

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Image = styled.img`
   width: 24px;
   height: 24px;
`;
