import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Item = ({ item,index }) => {
  return (
    <>
     <Accordion.Header> {item.name}</Accordion.Header>
     <Accordion.Body>
        <p>{item.description}</p>
        <p> £{item.price}</p>
      </Accordion.Body>

    </>
  );
};

export default Item;
