import "./App.css";
import Banner from "./components/Banner";
import ExtraProduct from "./components/ExtraProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Product />
      <ExtraProduct />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
