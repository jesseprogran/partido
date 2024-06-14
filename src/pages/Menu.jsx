import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import BreackfastImg from "../utils/img/familia01.jpg";
import BreackfastImg2 from "../utils/img/familia02.jpg";
import BreackfastImg3 from "../utils/img/familia03.jpg";
import BreackfastImg4 from "../utils/img/familia04.jpg";
import BreackfastImg5 from "../utils/img/familia05.jpg";
import BreackfastImg6 from "../utils/img/familia06.jpg";

const breackfast = [
  {
    id: 1,
    name: "Família",
    description: "Minha família é um presente precioso de Deus, onde Ele manifesta Seu amor, graça e bênçãos diárias. Cada membro da minha família é uma dádiva divina, contribuindo para a nossa unidade, felicidade e crescimento espiritual.",
  },
];

const breackfasttwo = [
  {
    id:2,
    name: "Esposa",
    description:"Minha família é um presente precioso de Deus, onde Ele manifesta Seu amor, graça e bênçãos diárias. Cada membro da minha família é uma dádiva divina, contribuindo para a nossa unidade, felicidade e crescimento espiritual."
  }
]

function Menu() {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light"></h1>
        </div>
      </header>
      <div className="breackfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Família
          </h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreackfastImg}
                className="img-fluid w-75 mt-4 mt-lg-0 rounded"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breackfast.map((breackfast) => (
                <div key={breackfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breackfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breackfast.description}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreackfastImg2}
                className="img-fluid w-75 mt-4 rounded"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breackfasttwo.map((breackfasttwo) => (
                <div key={breackfasttwo.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breackfasttwo.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breackfasttwo.description}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreackfastImg3}
                className="img-fluid w-75 mt-4 rounded"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breackfast.map((breackfast) => (
                <div key={breackfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breackfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breackfast.description}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreackfastImg4}
                className="img-fluid w-75 mt-4 rounded"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breackfast.map((breackfast) => (
                <div key={breackfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breackfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breackfast.description}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreackfastImg5}
                className="img-fluid w-75 mt-4 rounded"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breackfast.map((breackfast) => (
                <div key={breackfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breackfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breackfast.description}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreackfastImg6}
                className="img-fluid w-75 mt-4 rounded"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breackfast.map((breackfast) => (
                <div key={breackfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breackfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breackfast.description}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
