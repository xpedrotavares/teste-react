import React from "react";

import "../assets/styles/Restaurants.css";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import redLogo from "../assets/images/logo-red.jpg";
import food from "../assets/images/teste.jpg";

const Restaurants = () => {
  return (
    <div className="restaurants-container d-flex flex-column justify-content-center pt-4">
      <div>
        <div className="top-div-restaurants d-flex  pr-5 pl-5">
          <img
            className="red-logo align-self-center"
            src={redLogo}
            alt="preencher"
          />

          <div className="searchbar-div-restaurants d-flex justify-content-end align-items-center">
            <div className="form-div-restaurants ">
              <InputGroup className="justify-content-center">
                <InputGroup.Prepend>
                  <InputGroup.Text className="justify-content-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Digite sua cidade"
                  aria-label="Digite a sua cidade"
                  aria-describedby="basic-addon2"
                />

                <InputGroup.Append>
                  <Button className="search-button ml-1" variant="success">
                    {" "}
                    Buscar
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
       
        </div>
      </div>
      <div className="m-3">
        <Row>
          <Col className="" md={2}>
            <div className=" pt-4 pl-4 aside-filters">
              <div className="div-filter-nota mb-5">
                <h6 className="h6-filters">NOTA:</h6>
                <section className="d-flex align-items-center mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="oneStar"
                  />
                  <label className="mb-0" for="oneStar">
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                  </label>
                </section>
                <section className="d-flex align-items-center mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="oneStar"
                  />
                  <label className="mb-0" for="twoStar">
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                  </label>
                </section>
                <section className="d-flex align-items-center mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="oneStar"
                  />
                  <label className="mb-0" for="threeStar">
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                  </label>
                </section>
                <section className="d-flex align-items-center mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="oneStar"
                  />
                  <label className="mb-0" for="fourStar">
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                  </label>
                </section>
                <section className="d-flex align-items-center mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="oneStar"
                  />
                  <label className="mb-0" for="fiveStar">
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="star-icon-filters"
                      icon={faStar}
                    />
                  </label>
                </section>
              </div>

              <div className="div-filter-custo mb-5">
                <h6 className="h6-filters">CUSTO PARA 2 PESSOAS:</h6>
                <section className="mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="custo1"
                  />
                  <label for="custoUpTo50">Até R$50 </label>
                </section>

                <section className="mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="custo2"
                  />
                  <label for="custoUpTo50">De R$50 a R$80 </label>
                </section>

                <section className="mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="custo3"
                  />
                  <label for="custoUpTo50">De R$80 a R$110 </label>
                </section>

                <section className="mb-1">
                  <input
                    className="checkbox-input mr-2"
                    type="checkbox"
                    name="custo4"
                  />
                  <label for="custoUpTo50">Acima de R$110 </label>
                </section>
              </div>
              <div className="div-filter-tipo"></div>
              <h6 className="h6-filters">TIPO DE COZINHA:</h6>
              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Árabe</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Brasileira</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Chinesa</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Francesa</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Frutos do mar</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Italiana</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Japonesa</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Mexicana</label>
              </section>

              <section className="mb-1">
                <input
                  className="checkbox-input mr-2"
                  type="checkbox"
                  name="custo4"
                />
                <label for="custoUpTo50">Peruana</label>
              </section>
            </div>
          </Col>

          <Col md={10}>
          
            {/*
             FAZER O MAP DOS CARDS E PROPERTIES
              */}

            <div className="cards-div d-flex align-items-start">
              <Card className="m-2" style={{ width: "27rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "15rem" }}
                  src={food}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="mr-3" variant="success">
                    Go somewhere
                  </Button>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="m-2" style={{ width: "27rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "15rem" }}
                  src={food}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="mr-3" variant="success">
                    Go somewhere
                  </Button>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="m-2" style={{ width: "27rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "15rem" }}
                  src={food}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="mr-3" variant="success">
                    Go somewhere
                  </Button>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="m-2" style={{ width: "27rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "15rem" }}
                  src={food}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title
                  </Card.Text>
                  <Button className="mr-3" variant="success">
                    Go somewhere
                  </Button>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Restaurants;
