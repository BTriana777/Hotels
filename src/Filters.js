import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Filters = ({dateFrom, setDateFrom, dateTo, setDateTo, country, setCountry, price, setPrice, size, setSize}) => {
    const dateSelectionFrom = (e) => {
        setDateFrom(e.target.value);
    }
    const dateSelectionTo = (e) => {
        setDateTo(e.target.value);
    }
    const hotelsCounty = (e) => {
        const country = e.target.value;
        setCountry(country);
    }
    const hotelsPrice = (e) => {
        const price = e.target.value;
        setPrice(price);
    }
    const hotelsSize = (e) => {
        const size = e.target.value;
        setSize(size);
    }
    const cleanFilters = () => {
        setCountry("Todos los Paises");
        setPrice("Cualquier Precio");
        setSize("Cualquier Tamaño");
        setDateFrom("");
        setDateTo("");
    }
    return(
        <div className="contaFilters">
            <input className="inputDate" type="date" value={dateFrom} onChange={dateSelectionFrom}></input>
            <input className="inputDate" type="date" value={dateTo} onChange={dateSelectionTo}></input>

            <select value={country} onChange={hotelsCounty}>
                <option value="Todos los Paises">Todos los Paises</option>
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
            </select>
            <select value={price} onChange={hotelsPrice}>
                <option value="Cualquier Precio">Cualquier Precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
            <select value={size} onChange={hotelsSize}>
                <option value="Todos los tamaño">Cualquier Tamaño</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
            </select>
            <div className="contaButton-filter">
                <button className="button-filter" onClick={cleanFilters}>
                    <FontAwesomeIcon icon={faTrash} />
                    <p>Limpiar</p>
                </button>
            </div>
        </div>
    )
}
export default Filters