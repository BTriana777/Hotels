import React from "react";

const Header = ({ dateFrom, dateTo, country, price, size}) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
    
      const setearFecha = (fecha) => {
        return new Date(fecha + "T00:00:00").toLocaleDateString("es-CO", options);
      };
    return(
        <header>
            <div className="headerText">
                <h1>Hoteles</h1>
                {country !== "Todos los Paises"?(<h3>Viajar a: {country}</h3>) : (<h3>Seleciona un Pais</h3>)}
                {size !== "Todos los tamaño"?(<h3>Hoteles {size}</h3>):(<h3>Seleciona un Tamaño</h3>)}
                {price !== "Cualquier Precio"?(<h3>Con precios de {price}</h3>):(<h3>Seleciona un precio</h3>)}
                {dateFrom ? ( <h3> Desde: {setearFecha(dateFrom)}</h3>):(<h3>Seleciona una Fecha</h3>)}
                {dateTo ? ( <h3> Hasta: {setearFecha(dateTo)}</h3>):(<h3>Seleciona una Fecha</h3>)}
            </div>
        </header>
    )
}
export default Header;