import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import ProductsMain from "./components/ProductsMain/ProductsMain";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
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
          <div class="position-absolute top-50 start-50 translate-middle h1">
            WELLCOME
          </div>
        </Route>
      </Switch>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
