import { IBookImages } from ".";

interface IApiBook {
   id: string;
   volumeInfo: {
      title: string;
      authors: string[] | null;
      description: string;
      categories: string[] | null;
      imageLinks: IBookImages | null;
   };
}

export default IApiBook;
