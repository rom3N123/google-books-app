import { Grow } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import ArrowBtn from "../components/Buttons/ArrowBtn";
import SmallButton from "../components/SmallButton";
import { useApi } from "../hooks";
import { useAppSelector } from "../redux/storeHooks";

const Pagination: React.FC = () => {
   const { paginateBooks } = useApi();

   const foundResults = useAppSelector((state) => state.books.totalItems);

   const [paginationItems, setPaginationItems] = React.useState<number[]>([]);

   const [maxVisibleIndex, setMaxVisibleIndex] = React.useState(10);
   const [minVisibleIndex, setMinVisibleIndex] = React.useState(0);

   const calculateItems = (operation: "next" | "prev"): void => {
      if (operation === "next") {
         let diffArray: number[] = paginationItems.slice(maxVisibleIndex);

         if (!diffArray.length) {
            return;
         }

         if (diffArray.length > 10) {
            setMaxVisibleIndex(maxVisibleIndex + 10);
            setMinVisibleIndex(minVisibleIndex + 10);
         } else {
            setMaxVisibleIndex(maxVisibleIndex + diffArray.length);
            setMinVisibleIndex(diffArray.length);
         }
      } else {
         let diffArray: number[] = paginationItems.slice(0, minVisibleIndex);

         if (!diffArray.length) {
            return;
         }

         if (diffArray.length > 10) {
            setMaxVisibleIndex(minVisibleIndex + 10);
            setMinVisibleIndex(minVisibleIndex - 10);
         } else {
            setMaxVisibleIndex(maxVisibleIndex - diffArray.length);
            setMinVisibleIndex(minVisibleIndex - diffArray.length);
         }
      }
   };

   const handleArrowNextClick = () => calculateItems("next");
   const handleArrowPrevClick = () => calculateItems("prev");
   const handleLoadBooks = (startIndex: number) => {
      paginateBooks(startIndex);
   };

   React.useEffect(() => {
      if (foundResults) {
         let calculatedItems = Math.floor(foundResults / 30);

         // @ts-ignore
         setPaginationItems([...Array(calculatedItems).keys()]);
      }
   }, [foundResults]);

   return (
      <Wrapper>
         <Inner>
            <ArrowBtn onClick={handleArrowPrevClick} direction="left" />

            <PaginationItemsWrapper>
               {paginationItems
                  .slice(minVisibleIndex, maxVisibleIndex)
                  .map((item) => (
                     <Grow in={true} key={item}>
                        <SmallButton
                           onClick={() => handleLoadBooks((item + 1) * 30)}
                        >
                           {item + 1}
                        </SmallButton>
                     </Grow>
                  ))}
            </PaginationItemsWrapper>

            <ArrowBtn onClick={handleArrowNextClick} direction="right" />
         </Inner>
      </Wrapper>
   );
};

export default Pagination;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   align-items: center;
`;

const PaginationItemsWrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 0 10px;

   & > *:not(:last-child) {
      margin-right: 10px;
   }
`;
