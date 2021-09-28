import React from "react";
import { IoLocationSharp, IoBed, IoCalendar } from "react-icons/io5";

const Card = ({ props }) => {
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const setearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-CO", option);
  };

  return (
    <div className="contaCards">
      <div className="contaCard">
        <div className="contaImage">
          <img src={props.photo}></img>
        </div>
        <div className="contaTitle">
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
        <div className="contaInfo">
          <div className="contaDescri">
              <p>{props.description}</p>
          </div>
          <div className="contaLocation">
              <div>
                  <IoLocationSharp />
                  <p>San Pedro de Atacama, Chile</p>
              </div>
          </div>
          <div className="contaBedPrice">
            <div className="contaBed">
              <div className="contaBedImage">
                <IoBed />
              </div>
              <p>42 Habitaciones</p>
            </div>
            <div className="contaPrice">
              <p>
              {Array.from({ length: props.price }).map((item, index) => {
                return <span key={index}>$</span>;
              })}
              {Array.from({ length: 4 - props.price }).map((item, index) => {
                return (
                  <span key={index} className="opaco">
                    $
                  </span>
                );
              })}
              </p> 
            </div>
          </div>
          <div className="contaDate">
            <div>
              <IoCalendar className="icon"/>
              <p>{setearFecha(props.availabilityFrom)}</p>
            </div>
            <div>
              <IoCalendar className="icon" />
              <p>{setearFecha(props.availabilityTo)}</p>
            </div>
          </div>
          <div className="contaButton">
            <div className="button">
              <h3>Reserva</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
