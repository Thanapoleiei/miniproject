import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'firebase/auth'
import Show from './Show';
import Nav from './Nav'


class Home1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: ""
    }
  }


  componentDidMount() {
    this.setState({
      products: [
        { productId: 1, productName: "หน้ากากอนามัยลายดอก No.01", unitPrice: "39", thumbnail: "/image/No.01.jpg" },
        { productId: 2, productName: "หน้ากากอนามัยลายดอก No.02", unitPrice: "39", thumbnail: "/image/No.02.jpg" },
        { productId: 3, productName: "หน้ากากอนามัยลายดอก No.03", unitPrice: "39", thumbnail: "/image/No.03.jpg" },
        { productId: 4, productName: "หน้ากากอนามัยลายดอก No.04", unitPrice: "39", thumbnail: "/image/No.04.jpg" },
        { productId: 5, productName: "หน้ากากอนามัยลายดอก No.05", unitPrice: "39", thumbnail: "/image/No.05.jpg" },
        { productId: 6, productName: "หน้ากากอนามัยลายดอก No.06", unitPrice: "39", thumbnail: "/image/No.06.jpg" },
        { productId: 5, productName: "หน้ากากอนามัยลายดอก No.07", unitPrice: "39", thumbnail: "/image/No.07.jpg" },
        { productId: 5, productName: "หน้ากากอนามัยลายดอก No.08", unitPrice: "39", thumbnail: "/image/No.08.jpg" },
        { productId: 5, productName: "หน้ากากอนามัยลายดอก No.09", unitPrice: "39", thumbnail: "/image/No.09.jpg" },
        { productId: 5, productName: "[NEW]หน้ากากอนามัยลายดอก No.10", unitPrice: "45", thumbnail: "/image/No.10.jpg" },
        { productId: 5, productName: "[NEW]หน้ากากอนามัยลายดอก No.11", unitPrice: "45", thumbnail: "/image/No.11.jpg" },
        { productId: 5, productName: "[NEW]หน้ากากอนามัยลายดอก No.12", unitPrice: "45", thumbnail: "/image/No.12.jpg" },
        { productId: 5, productName: "[NEW]หน้ากากอนามัยลายดอก No.13", unitPrice: "45", thumbnail: "/image/No.13.jpg" },
        { productId: 5, productName: "[NEW]หน้ากากอนามัยลายดอก No.14", unitPrice: "45", thumbnail: "/image/No.14.jpg" },
        { productId: 5, productName: "[NEW]หน้ากากอนามัยลายดอก No.15", unitPrice: "45", thumbnail: "/image/No.15.jpg" },
      ]
    })
    if (this.state.user == null) {
      return (
        <div>
          <Home1 />
        </div>

      );
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <Show products={this.state.products} />
      </div>
    );
  }
}

export default Home1;