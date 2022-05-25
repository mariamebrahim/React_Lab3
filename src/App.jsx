import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./components/MainPage.component";
let myArr = [
  {
    id: 1,
    name: "Product 1",
    price: "5000",
    quantity: 80,
    productimag: "Product 1.jpg",
    productdescription: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "5000",
    quantity: 80,
    productimag: "Product 2.jpg",
    productdescription: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "5000",
    quantity: 80,
    productimag: "Product 3.jpg",
    productdescription: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: "5000",
    quantity: 80,
    productimag: "Product 4.jpg",
    productdescription: "Product 4",
  },
];
function App() {
  return <MainPage products={myArr}></MainPage>;
}

export default App;
