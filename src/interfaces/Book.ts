import { IBookImages } from ".";

interface IBook {
   thumbnails: IBookImages | undefined | null;
   categories: string[] | null;
   title: string;
   authors: string[] | null;
   description: string | null;
}

export default IBook;
