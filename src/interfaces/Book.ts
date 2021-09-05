import { IBookImages } from ".";

interface IBook {
   imageLinks: IBookImages | undefined | null;
   categories: string[] | null;
   title: string;
   authors: string[] | null;
   description: string | null;
}

export default IBook;
