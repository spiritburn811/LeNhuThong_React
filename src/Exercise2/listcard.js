import React, { Component } from "react";
import ItemCard from "./itemcard";

const ListCard = () => {
  return (
    <div className="row">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default ListCard;
