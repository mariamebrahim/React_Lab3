import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduct from "./routers/Adding.component";
import DetailsProduct from "./routers/Details.component";
import EditProduct from "./routers/Edit.component";
import ListProduct from "./routers/ProductsTable.component";
class MainPage extends Component {
  state = {
    products: this.props.products,
  };
  onAdd = (newProduct) => {
    let newArray = [...this.state.products, newProduct];
    this.setState({ products: newArray });
  };
  onEdit = (id, updated) => {
    let index = this.state.products.findIndex((p) => p.id === id);
    this.state.products[index] = updated;
    this.setState({ products: this.state.products });
  };
  onDelete = (index) => {
    let newProducts = this.state.products.filter((product, i) => {
      return i !== index;
    });
    this.setState({ products: newProducts });
  };
  render() {
    return (
      <Router>
        <Route
          component={() => (
            <ListProduct
              products={this.state.products}
              onDelete={this.onDelete}
            ></ListProduct>
          )}
          path="/"
          exact
        ></Route>
        <Route component={DetailsProduct} path="/Details/:id" exact></Route>
        <Route
          component={(props) => (
            <EditProduct onEdit={this.onEdit} {...props}></EditProduct>
          )}
          path="/Edit/:id"
          exact
        ></Route>
        <Route
          component={() => <AddProduct onAdd={this.onAdd}></AddProduct>}
          path="/Add"
          exact
        ></Route>
      </Router>
    );
  }
}

export default MainPage;