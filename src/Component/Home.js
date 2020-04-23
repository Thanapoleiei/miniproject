import React, { Component } from 'react';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import fire from '../Firebase/Config'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
const Home = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {

      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
          console.log(u)
      }).catch((err) => {
          console.log(err)
      })
  }


  const signup = e => {

      e.preventDefault()
      fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
          console.log(u)
      }).catch((err) => {
          console.log(err)
      })
  }

  return (
    // <div>
    //   <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    //     <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    //       <ul class="navbar-nav mr-auto">
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#"><img style={{ height: 70, width: 60 }} src="/image/virus.png" alt="" />
    //             {"   "}Ock Ock </a>
    //         </li>
    //         {/* <li class="nav-item">
    //             <a class="nav-link" href="//codeply.com">Codeply</a>
    //         </li>
    //         <li class="nav-item">
    //             <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item">
    //             <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item">
    //             <a class="nav-link" href="#">Link</a>
    //         </li> */}
    //       </ul>
    //     </div>


    //     <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
    //       <ul class="navbar-nav ml-auto">
    //         {/* <li class="nav-item">
    //             <a class="nav-link" href="#">Right</a>
    //         </li> */}
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Log out</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <section className="section container">
    //     <div className="columns is-centered">
    //       <div className="column is-half">
    //         <form>
    //           <div className="field">
    //             <label className="label">Email</label>
    //             <div className="control">
    //               <input className="input" type="email" name="email" />
    //             </div>
    //           </div>

    //           <div className="field">
    //             <label className="label">Password</label>
    //             <div className="control">
    //               <input className="input" type="password" name="password" />
    //             </div>
    //           </div>

    //           <div className="field is-grouped">
    //             <div className="control">
    //       {/* <button className="button is-link">{logout}Submit</button> */}
    //       <MDBBtn color="primary" onClick={login}>LOGIN</MDBBtn>
    //             </div>
    //             <div className="control">
    //               <button className="button is-link">Cancel</button>
    //             </div>
    //           </div>
    //         </form>
    //         <p className="h5 text-center mb-4">Sign up</p>
    //                         <div className="grey-text">
    //                             <MDBInput label="Your email" group type="email" validate error="wrong"
    //                                 success="right" name="email" onChange={(e) => setEmail(e.target.value)} />
    //                             <MDBInput label="Your password" group type="password" name="password" validate onChange={(e) => setPassword(e.target.value)} />
    //                         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div >
            <MDBContainer>
                <MDBRow className="LoginForm">
                    <MDBCol md="9">
                        <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput label="Your email" group type="email" validate error="wrong"
                                    success="right" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput label="Your password" group type="password" name="password" validate onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" onClick={login}>LOGIN</MDBBtn>
                                <MDBBtn color="primary" onClick={signup}>Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
  )
}

export default Home