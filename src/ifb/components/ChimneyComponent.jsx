import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/TvComponent.css";

// fixed imports for modal functionality
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// image sources
import tvone from "../componentsSrcAssets/Cone.jpg";
import tvtwo from "../componentsSrcAssets/ctwo.jpg";
import tvthree from "../componentsSrcAssets/cthree.jpg";
import tvfour from "../componentsSrcAssets/cfour.jpg";
import tvfive from "../componentsSrcAssets/Cfive.jpg";
import tvsix from "../componentsSrcAssets/Csix.jpg";

function ChimneyComponent() {
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
              <h3>Slide 1 - Chimney Repair</h3>
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
              <h3>Slide 2 - Chimney Setup Service</h3>
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
              <h3>Slide 3 - Chimney Calibration</h3>
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
            <h4>Chimney Repair Service</h4>
            <p>
            "Don’t Let a Damaged Chimney Put Your Home at Risk — Call Us Today!"
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
        </Row>

        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-description">
            <h4>Chimney Setup Service</h4>
            <p>
            "Start Right with Our Trusted Chimney Installation Services."
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
            <h4>Chimney Calibration Service</h4>
            <p>
            "Ensure Optimal Draft and Efficiency with Expert Calibration."
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

export default ChimneyComponent;
