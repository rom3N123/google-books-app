import { IBookImages } from ".";

interface IBook {
   thumbnails: IBookImages | null;
   categories: string[] | null;
   title: string;
   authors: string[] | null;
   description: string | null;
}

export default IBook;
