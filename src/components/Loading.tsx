import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components/macro";

interface Props {}

function Loading({}: Props): ReactElement {
   return <Animation />;
}

export default Loading;

const LoadingAnimation = keyframes`
   0% {
      transform: scale(0);
      opacity: 0;
   }

   50% {
      opacity: 1;
   }

   100% {
      transform: scale(1.3);
      opacity: 0;
   }
`;

const Animation = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: rgba(0, 0, 0, 0.3);

   animation: ${LoadingAnimation} 1s cubic-bezier(0, 0, 1, 1.54);
   animation-iteration-count: infinite;
`;
