import './App.css'
import React, { Component } from 'react';
import Header from "./Component/Header";
// import Monitor from "./components/monitor/Monitor";
// import Footer from "./components/Footer";
import Item from "./Component/Item";
import Show from './Component/Show';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products : ""};
  }
  componentDidMount() {
    this.setState({products : [
      { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/image/1.jpg" },
      { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/image/2.jpg" },
      { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/image/3.jpg" },
      { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/image/4.jpg" },
      { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/image/5.jpg" },
      { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/image/6.jpg" }
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