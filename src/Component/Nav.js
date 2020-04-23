import React, { Component } from "react";
import { Navbar, Button, Form, FormControl } from 'react-bootstrap'
import { MDBNavbar,MDBCollapse,MDBNavbarToggler,MDBNavbarBrand ,MDBNavbarNav,MDBNavItem,MDBNavLink} from 'mdbreact';
export default function Nav() {
    return (
    
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><img style={{ height: 70,width:60 }} src="/image/virus.png" alt="" />
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
    



    );
}
