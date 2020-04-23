import React, { Component } from "react";
import fire from '../Firebase/Config'

const Login = () => {

  const logout = () => {

    fire.auth().signOut();

   
  }

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><img style={{ height: 70, width: 60 }} src="/image/virus.png" alt="" />
                {"   "}Ock Ock </a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="//codeply.com">Codeply</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li> */}
          </ul>
        </div>


        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            {/* <li class="nav-item">
                <a class="nav-link" href="#">Right</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="#">Log out</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <form>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" name="email" />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password" />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
          <button className="button is-link">{logout}Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>

  )
}
export default Login;