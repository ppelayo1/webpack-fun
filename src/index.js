// import googleUrl from './ajax.js'

// document.querySelector("#target").innerHTML = googleUrl;

// document.querySelector("#google").href = googleUrl;

import React from "react";
import {render} from "react-dom";

import App from './App.js';
console.log(App);
render(
    <App/>,
    document.querySelector("#target")
);
