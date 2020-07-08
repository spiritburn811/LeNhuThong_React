import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ContentWhat from "./contentwhat";
import ContentContact from "./contentcontact";
import ListCard from "./listcard";
import Footer from "./footer";

const Exercise2 = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <ContentWhat />
          <ContentContact />
        </div>
        <ListCard />
      </div>

      <Footer />
    </div>
  );
};

export default Exercise2;
