import { createGlobalStyle } from "styled-components";

const styles = createGlobalStyle`
   body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      scroll-behavior: smooth;
      margin: 0;

      @media (min-width: 768px) {
         font-size: 16px;
      }

      @media (min-width: 576px) and (max-width: 768px) {
         font-size: 15px;
      }

      @media (max-width: 576px) {
         font-size: 14px;
      }
   }

   

   ul {
      padding: 0;
   }

   img {
      max-width: 100%;
   }

   a {
      text-decoration:none;
   }


   *,
   *::after,
   *::before {
      box-sizing:border-box;
      margin: 0;
   }

   input,
   button {
      border:none;
      outline:none;
   }

   button {
      cursor:pointer;
      background-color: transparent;
   }
`;

export default styles;
