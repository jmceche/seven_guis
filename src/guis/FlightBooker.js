import React, { useEffect, useState } from "react";

export default function App() {
  const [noReturn, setNoReturn] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [date, setDate] = useState({
    oneWay: new Date().toISOString().slice(0, 10),
    returnFlight: new Date().toISOString().slice(0, 10),
  });
  const { oneWay, returnFlight } = date;

  useEffect(() => {
    if (returnFlight < oneWay) {
      setNoReturn(true);
      setButtonDisabled(true);
    } else {
      setNoReturn(false);
      setButtonDisabled(false);
    }
  }, [returnFlight, oneWay]);

  const handleSelect = (e) => {
    setNoReturn(e.target.value === "oneway");
  };

  const handleChange = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`You have booked a flight on ${oneWay}`);
  };

  return (
    <div className='App'>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <select onChange={handleSelect}>
          <option value='oneway'>one-way flight</option>
          <option value='return'>return flight</option>
        </select>
        <input
          type='date'
          format='dd/MM/yyyy'
          name='oneWay'
          value={oneWay}
          onChange={handleChange}
          className={`.no-flight`}
        ></input>
        <input
          type='date'
          format='dd/MM/yyyy'
          name='returnFlight'
          value={returnFlight}
          disabled={noReturn}
          onChange={handleChange}
        ></input>
        <button type='submit' disabled={buttonDisabled}>
          Book
        </button>
      </form>
    </div>
  );
}
