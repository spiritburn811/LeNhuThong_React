import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default class Exercise1 extends Component {
  render() {
    return (
      <div className="comp">
        <Header />
        <div className="contentbox">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}
