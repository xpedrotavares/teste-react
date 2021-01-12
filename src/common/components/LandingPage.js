import React from "react";

import "../assets/styles/body.css";
import "../assets/styles/LandingPage.css";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import whiteLogo from "../assets/images/logo-white.jpg";

const LandingPage = () => {
  return (
    <div className="landingpage-container d-flex flex-column align-items-center">
      <div className="white-logo-div d-flex justify-content-center align-items-center">
        <img className="negative-logo" src={whiteLogo} alt="background" />
      </div>
<Container className="justify-content-center">

      <Row xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 d-flex justify-content-center
      ">
        <Col  xs={12} sm={12} md={12} lg={10} xl={11}>
          <div className="form-div d-flex flex-column justify-content-center align-items-left">
            <div className="div-h1">
              <h1 className="h1-landingpage align-self-start">
              
                Descubra os melhores <br /> restaurantes em sua cidade
              </h1>
            </div>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text className="justify-content-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                //   {}
                
                placeholder="Digite sua cidade"
                aria-label="Digite a sua cidade"
                aria-describedby="basic-addon2"
                />

              <InputGroup.Append>
                <Button  className="search-button ml-1" variant="success">
                  {" "}
                  Buscar
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
      </Row>
                </Container>
    </div>
  );
};

export default LandingPage;
