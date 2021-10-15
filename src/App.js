import { Route, Switch } from "react-router";
import ProductsMain from "./components/ProductsMain/ProductsMain";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Creation from "./components/Creation/Creation";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/products" component={ProductsMain} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/create" component={Creation} />
        <Route exact path="/editor/:id" component={Creation} />
        <Route exact path="*">
          WELCOME
        </Route>
      </Switch>
    </div>
  );
}

export default App;
