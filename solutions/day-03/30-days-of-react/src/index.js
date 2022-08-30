import React from "react";
import ReactDOM from "react-dom"
import './App.css'

import header from "./components/header";
import main from "./components/main"
import footer from "./components/footer";

import subscribe from "./components/subscribe";


const app = (
  <div className="app">
    {header}
    {main}
    {subscribe}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)