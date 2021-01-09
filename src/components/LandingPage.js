import React from "react";

import "../assets/styles/body.css";
import "../assets/styles/LandingPage.css";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoNegative from "../assets/images/logo-white.jpg";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="negative-logo-div d-flex justify-content-center align-items-center">
        <img className="negative-logo" src={logoNegative} alt="background" />
      </div>

      <div className="form-div d-flex flex-column justify-content-center align-items-center">
            <div className="div-h1 mb-2">

          <h1 > Descubra os melhores <br/> restaurantes da sua cidade</h1>
          
            </div>
            
        <InputGroup className="mb-3">
        <InputGroup.Prepend>

      <InputGroup.Text>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      </InputGroup.Text>
    </InputGroup.Prepend>
          <FormControl
        //   {}
           
            placeholder='Digite sua cidade'
            aria-label="Digite a sua cidade"
            aria-describedby="basic-addon2"
          />
  
              
          
          <InputGroup.Append>
            <Button className="ml-1" variant="success"> Buscar</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
};

export default LandingPage;
