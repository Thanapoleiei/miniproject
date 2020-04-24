import './App.css'
import React, { Component } from 'react';

import Home from './Component/Home';
import fire from './Firebase/Config'
import { Route} from 'react-router-dom';
import Home1 from './Component/Home1';
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
 

  

  render() {
    return (
      <div>
       
        {/* <Login /> */}
         <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home1} />
        {/* <Header /> */}
        {/* <Show products={this.state.products} /> */}
         {/* <Monitor products={this.state.products} /> */}
        {/* <Footer company="Olanlab" email="olan@olanlab.com" />  */}
      </div>
    );
  }
}

export default App;