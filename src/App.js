import Header from "./Header";
import Filters from "./Filters";
import Cards from "./cards/Cards";
import hotelsData from "./data";
import "./style.css";
import { useState }  from "react";

const App = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [country, setCountry] = useState("Todos los Paises");
  const [price, setPrice] = useState("Cualquier Precio");
  const [size, setSize] = useState("Todos los tamaño");

  const newListHotels = () => {
    let newLits = hotelsData
      .filter((data) => {
        if (!dateFrom || !dateTo) {
          return data;
        }
        return (
          data.availabilityFrom > new Date(dateFrom).getTime() &&
          data.availabilityTo < new Date(dateTo).getTime()
        );
      })
      .filter((data) => {
        if (size === "Pequeño") {
          return data.rooms <= 10;
        } else if (size === "Mediano") {
          return data.rooms > 10 && data.rooms <= 20;
        } else if (size === "Grande") {
          return data.rooms > 20;
        }
        return data;
      })
      .filter((data) => {
        if (country !== "Todos los Paises") {
          return data.country === country;
        }
        return data;
      })
      .filter((data) => {
        if (price !== "Cualquier Precio") {
          return data.price === Number(price);
        }
        return data;
      });
    return newLits;
  };
  const newListFiltered = newListHotels();
  return (
    <>
      <Header country={country} dateFrom={dateFrom} dateTo={dateTo} price={price} size={size}/>
      <Filters 
      dateFrom={dateFrom} 
      setDateFrom={setDateFrom}
      dateTo={dateTo}
      setDateTo={setDateTo}
      country={country}
      setCountry={setCountry}
      price={price}
      setPrice={setPrice}
      size={size}
      setSize={setSize}
      />
      {hotelsData.length === 0 ? (<h1>SAPO NO HAY NADA</h1>) : (
        <Cards newListFiltered={newListFiltered}/>
      )}
    </>
  );
};

export default App;
