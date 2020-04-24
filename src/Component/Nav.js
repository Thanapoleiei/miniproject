import React, { Component } from "react";
export default function Nav() {

    return (

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/Home"><img style={{ height: 80, width: 60 }} src="/image/medical-mask.png" alt="" />
                            {"    "}  Mask Mask </a>
                    </li>
                </ul>
            </div>


            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                    {/* <li class="nav-item">
                    <a class="nav-link" href="#">Right</a>
                </li> */}
                    <li class="nav-item">
                        <a class="nav-link" href="/">Log out</a>

                    </li>
                </ul>
            </div>
        </nav>




    );
}
