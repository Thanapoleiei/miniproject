import './App.css'
import React, { Component } from 'react';
import Header from "./Component/Header";
import NavBar from "./Component/Navbar"
import Login from "./Component/Login";
import Show from './Component/Show';
import Home from './Component/Home';
import fire from './Firebase/Config'
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      products : ""
    }
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
        <Login />
      </div>

    );
  }
  }
  

  render() {
    return (
      <div>
        {/* <NavBar />
        <Login /> */}
         <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Header /> */}
        {/* <Show products={this.state.products} /> */}
        {/* <Monitor products={this.state.products} />
        <Footer company="Olanlab" email="olan@olanlab.com" /> */}
      </div>
    );
  }
}

export default App;