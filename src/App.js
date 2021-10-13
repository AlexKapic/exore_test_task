import { Route, Switch } from "react-router";
import ProductsMain from "./components/ProductsMain/ProductsMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products" component={ProductsMain} />
      </Switch>
    </div>
  );
}

export default App;
