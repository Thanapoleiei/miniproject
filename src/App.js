import './App.css'
import React, { Component } from 'react';
import Header from "./Component/Header";

import Show from './Component/Show';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products : ""};
  }
  componentDidMount() {
    this.setState({products : [
      { productId: 1, productName: "หน้ากากอนามัยลายดอก No.01", unitPrice: "49", thumbnail: "/image/No.01.jpg" },
      { productId: 2, productName: "หน้ากากอนามัยลายดอก No.02", unitPrice: "49", thumbnail: "/image/No.02.jpg" },
      { productId: 3, productName: "หน้ากากอนามัยลายดอก No.03", unitPrice: "49", thumbnail: "/image/No.03.jpg" },
      { productId: 4, productName: "หน้ากากอนามัยลายดอก No.04", unitPrice: "49", thumbnail: "/image/No.04.jpg" },
      { productId: 5, productName: "หน้ากากอนามัยลายดอก No.05", unitPrice: "49", thumbnail: "/image/No.05.jpg" },
      { productId: 6, productName: "หน้ากากอนามัยลายดอก No.06", unitPrice: "49", thumbnail: "/image/No.06.jpg" }
  ]})
  }

  render() {
    return (
      <div>
        
        <Header />
        <Show products={this.state.products} />
        {/* <Monitor products={this.state.products} />
        <Footer company="Olanlab" email="olan@olanlab.com" /> */}
      </div>
    );
  }
}

export default App;