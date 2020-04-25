import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../Firebase/Config'
import "./back.css";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader,MDBMask,MDBView } from 'mdbreact';
const Home = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {

    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
      console.log(u)
      props.history.push('/Home')
    }).catch((err) => {
      console.log(err)
    })
  }


  const signup = e => {

    e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
      console.log(u)
      alert('REGISTER SUCCESS')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/"><img style={{ height: 70, width: 60 }} src="/image/medical-mask.png" alt="" />
                {"   "}Mask Mask </a>
            </li>

          </ul>
        </div>

      </nav>
      
                <MDBCard>
                <MDBView src="http://1.bp.blogspot.com/--whU-255l8s/XqRSD5xcP3I/AAAAAAAAADo/81fInD2HoBAnnbd5xEr3bV5bllgu5OSmQCLcBGAsYHQ/s320">
            <MDBMask className="flex-center flex-column text-white text-center">
              
              
          
                  <MDBCardBody>
                    <MDBCardHeader color="black" className="md-card-header-text">
                      <h3 className="col-12">
                        SIGN UP
                </h3>
                    </MDBCardHeader>


                    <div className="white-text">
                      <br></br>
                             <h5 >  E-MAIL</h5>
                                <input

                        type="email"
                        id="defaultFormEmailEx"
                        className="form-control"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}

                      />
                      <br></br>
            <h5>  PASSWORD</h5>
                                <input
                        type="password"
                        id="defaultFormPasswordEx"
                        className="form-control"
                        name="password"
                        validate onChange={(e) => setPassword(e.target.value)}


                      />
                    </div>
                    <div className="text-center">
                      <br></br>
                      <button type="button" class="btn btn-outline-danger " onClick={login}><i class="fas fa-magic mr-1"></i>LOG IN</button>
                      <button type="button" class="btn btn-outline-danger" onClick={signup}><i class="fas fa-magic mr-1"></i>REGISTER</button>

                    </div>
                  </MDBCardBody>
                  </MDBMask>
          </MDBView>
                </MDBCard>
          

        </div>
      
    



  )
}

export default Home