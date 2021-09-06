import { BookPage, BooksCatalog, Header } from "./containers";
import { useAppSelector } from "./redux/storeHooks";

const App: React.FC = () => {
   const state = useAppSelector((state) => state);

   return (
      <div className="App">
         <Header />

         {(!state.book.item && <BooksCatalog />) || <BookPage />}
      </div>
   );
};

export default App;
