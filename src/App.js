import { useSelector } from "react-redux";
import { BookPage, BooksCatalog, Header } from "./containers";

function App() {
   const state = useSelector((state) => state);

   return (
      <div className="App">
         <Header />

         {(!state.book && <BooksCatalog />) || <BookPage />}
      </div>
   );
}

export default App;
