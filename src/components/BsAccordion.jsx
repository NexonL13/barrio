import React from "react";
import { Accordion } from "react-bootstrap";

const BsAccordion = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-2" flush>
      <Accordion.Item eventKey="0" className="item">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
          nam enim reiciendis molestias minima?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="item">
        <Accordion.Header>Sponsors</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
          nam enim reiciendis molestias minima?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="item">
        <Accordion.Header>Owner</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
          nam enim reiciendis molestias minima?
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default BsAccordion;
