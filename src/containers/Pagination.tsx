import React from "react";
import styled from "styled-components/macro";
import { Grow } from "@material-ui/core";
import { ArrowBtn, IconButton } from "../components";
import { useApi, usePagination } from "../hooks";
import { useAppSelector } from "../redux/storeHooks";

const Pagination: React.FC = () => {
   const { paginateBooks } = useApi();

   const { paginationSize } = usePagination();

   const foundResults = useAppSelector((state) => state.books.totalItems);
   const [paginationItems, setPaginationItems] = React.useState<number[]>([]);
   const [maxVisibleIndex, setMaxVisibleIndex] = React.useState(10);
   const [minVisibleIndex, setMinVisibleIndex] = React.useState(0);

   const [activePagination, setActivePagination] = React.useState(1);

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

   const loadBooks = (page: number) => {
      paginateBooks(page);
   };

   const handleButtonClick = (value: number): void => {
      if (value + 1 === activePagination) {
         return;
      }

      const page = value * paginationSize;
      loadBooks(page);
      setActivePagination(value + 1);
   };

   React.useEffect(() => {
      if (foundResults) {
         let calculatedItems = Math.round(foundResults / paginationSize);

         // @ts-ignore
         setPaginationItems([...Array(calculatedItems).keys()]);
      }
   }, [foundResults, paginationSize]);

   console.log(activePagination);

   return (
      <Wrapper>
         <Inner>
            <ArrowBtn onClick={handleArrowPrevClick} direction="left" />

            <PaginationItemsWrapper>
               {paginationItems
                  .slice(minVisibleIndex, maxVisibleIndex)
                  .map((value) => (
                     <Grow in={true} key={value}>
                        <IconButton
                           backgroundColor={`${
                              value + 1 === activePagination ? "#ccc" : ""
                           }`}
                           onClick={() => handleButtonClick(value)}
                        >
                           {value + 1}
                        </IconButton>
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
