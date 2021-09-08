import { Header } from "./containers";
import { Route, Switch } from "react-router-dom";
import { Home, BookPage } from "./views";

const App: React.FC = () => {
   return (
      <div className="App">
         <Header />

         <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/books/:id" component={BookPage} />
         </Switch>
      </div>
   );
};

export default App;
