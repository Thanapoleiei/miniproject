import './App.css'
import React, { Component } from 'react';
import Header from "./Component/Header";
// import Monitor from "./components/monitor/Monitor";
// import Footer from "./components/Footer";
// import ProductItem from "./components/product/ProductItem";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products : ""};
  }


  render() {
    return (
      <div>
        <Header />
        {/* <Monitor products={this.state.products} />
        <Footer company="Olanlab" email="olan@olanlab.com" /> */}
      </div>
    );
  }
}

export default App;