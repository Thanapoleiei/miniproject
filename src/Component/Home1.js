import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from '../Firebase/Config'
import 'firebase/auth'

import Show from './Show';
import Nav from './Nav'



class Home1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      products : ""
    }
  }

  
  logout = () => {

    fire.auth().signOut();

   
  }
  componentDidMount() {
    this.authListener()
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
 
  componentDidMount() {
    this.setState({products : [
      { productId: 1, productName: "หน้ากากอนามัยลายดอก No.01", unitPrice: "49", thumbnail: "/image/No.01.jpg" },
      { productId: 2, productName: "หน้ากากอนามัยลายดอก No.02", unitPrice: "49", thumbnail: "/image/No.02.jpg" },
      { productId: 3, productName: "หน้ากากอนามัยลายดอก No.03", unitPrice: "49", thumbnail: "/image/No.03.jpg" },
      { productId: 4, productName: "หน้ากากอนามัยลายดอก No.04", unitPrice: "49", thumbnail: "/image/No.04.jpg" },
      { productId: 5, productName: "หน้ากากอนามัยลายดอก No.05", unitPrice: "49", thumbnail: "/image/No.05.jpg" },
      { productId: 6, productName: "หน้ากากอนามัยลายดอก No.06", unitPrice: "49", thumbnail: "/image/No.06.jpg" },
      { productId: 5, productName: "หน้ากากอนามัยลายดอก No.07", unitPrice: "49", thumbnail: "/image/No.07.jpg" },
      { productId: 5, productName: "หน้ากากอนามัยลายดอก No.08", unitPrice: "49", thumbnail: "/image/No.08.jpg" },
  ]})
  if (this.state.user == null) {
    return (
      <div>
        <Home1/>
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