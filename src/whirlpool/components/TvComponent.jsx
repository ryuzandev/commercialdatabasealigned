import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/TvComponent.css";

// fixed imports for modal functionality
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// image sources
import tvone from "../componentsSrcAssets/tvone.jpg";
import tvtwo from "../componentsSrcAssets/tvtwo.jpg";
import tvthree from "../componentsSrcAssets/tvthree.jpg";
import tvfour from "../componentsSrcAssets/tvfour.jpg";
import tvfive from "../componentsSrcAssets/tvfive.jpg";
import tvsix from "../componentsSrcAssets/tvsix.jpg";

function TvComponent() {
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  const handleBookNowClick = () => {
    setShowBookNowModal(true);
  };

  const handleTroubleshootClick = () => {
    setShowTroubleshootModal(true);
  };

  const closeBookNowModal = () => {
    setShowBookNowModal(false);
  };

  const closeTroubleshootModal = () => {
    setShowTroubleshootModal(false);
  };

  return (
    <>
    <div className="tv-component-wrapper">
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <div className="tv-carousel-item-content">
            <img
              src={tvone}
              alt="Television Repair"
              className="tv-carousel-image"
            />
            <div className="tv-carousel-caption">
              <h3>Slide 1 - Water Purifier Repair</h3>
              <Button
                variant="primary"
                className="tv-carousel-btn"
                onClick={handleBookNowClick}
              >
                Complaint-Specimen
              </Button>
              {/* <Button
                variant="secondary"
                className="tv-carousel-btn"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </Button> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="tv-carousel-item-content">
            <img
              src={tvfive}
              alt="TV Setup Service"
              className="tv-carousel-image"
            />
            <div className="tv-carousel-caption">
              <h3>Slide 2 - Water Purifier Service</h3>
              <Button
                variant="primary"
                className="tv-carousel-btn"
                onClick={handleBookNowClick}
              >
                Complaint-Specimen
              </Button>
              {/* <Button
                variant="secondary"
                className="tv-carousel-btn"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </Button> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="tv-carousel-item-content">
            <img
              src={tvthree}
              alt="TV Calibration"
              className="tv-carousel-image"
            />
            <div className="tv-carousel-caption">
              <h3>Slide 3 - Water Clarity</h3>
              <Button
                variant="primary"
                className="tv-carousel-btn"
                onClick={handleBookNowClick}
              >
                Complaint-Specimen
              </Button>
              {/* <Button
                variant="secondary"
                className="tv-carousel-btn"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </Button> */}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Grid System with Image and Description */}
      <Container className="tv-grid-container">
        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-img-container">
            <img src={tvfour} alt="TV Repair" className="tv-grid-img" />
          </Col>
          <Col md={6} className="tv-grid-description">
            <h4>Purifier Repair Service</h4>
            <p>
            "Keep the Fresh Flow — Reliable Purifier Repair for Healthier Living."
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
        </Row>

        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-description">
            <h4>Purifier Setup Service</h4>
            <p>
            "Pure Water Made Easy — Professional Purifier Installation for Peace of Mind."
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
          <Col md={6} className="tv-grid-img-container">
            <img src={tvtwo} alt="TV Setup" className="tv-grid-img" />
          </Col>
        </Row>

        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-img-container">
            <img src={tvsix} alt="TV Calibration" className="tv-grid-img" />
          </Col>
          <Col md={6} className="tv-grid-description">
            <h4>Purifier Service</h4>
            <p>
            "Breathe Easy, Drink Pure — Professional Purifier Service at Your Doorstep."
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Modals for Book Now and Troubleshoot */}
      {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
      {showTroubleshootModal && (
        <TroubleshootModal onClose={closeTroubleshootModal} />
      )}
    </div>
    <EnquiryModuleCommon/>
    </>
  );
}

export default TvComponent;
