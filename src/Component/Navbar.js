import React, { Component } from "react";

export default function Navbar() {
    return (

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img style={{ height: 70 }} src="/image/wellness.png" alt="" />{" "}
              Ock Ock {" "}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item-right">
        <a class="nav-link" href="#">Log out</a>
      </li>
   
   
    </ul> */}
    
        <a class="nav-brand" href="#">Log out</a>
      
  </div>
</nav>

    );
}
