import React, { Component, useState } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  // const [state, setState] = useState({ imageData: IMAGES.slice(0, 10) });
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];
  return (
    <section id="gallary" style={{ backgroundColor: "#fff" }}>
      <Container fluid className="message-container">
        <Row>
          <Col className="mx-auto my-3 text-center text-capitalize">
            <h1>
              University <strong style={{ color: "brown" }}>Gallery</strong>
            </h1>
          </Col>
        </Row>
        <Gallery images={images} />
        <div className="text-center">
          <Button
            variant="danger"
            data-aos="zoom-in"
            style={{ margin: "20px 0", color: "#fff" }}
            className=" btn-gallery"
          >
            <Link to="/">View More</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PhotoGallery;
