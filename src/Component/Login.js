import React, { Component } from "react";
import fire from '../Firebase/Config'

const Login = () => {

  const logout = () => {

    fire.auth().signOut();


  }


  return (

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
    // </div>

  )
}
export default Login;