import React, { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  const [noReturn, setNoReturn] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [date, setDate] = useState({
    oneWay: new Date().toISOString().slice(0, 10),
    returnFlight: new Date().toISOString().slice(0, 10),
  });
  const { oneWay, returnFlight } = date;

  useEffect(() => {
    if (returnFlight < oneWay) {
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
    <>
      <Container>
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            margin: "0 auto",
          }}
          onSubmit={handleSubmit}
        >
          <Select
            onChange={handleSelect}
            defaultValue='return'
            variant='outlined'
          >
            <option value='oneway'>one-way flight</option>
            <option value='return'>return flight</option>
          </Select>
          <TextField
            type='date'
            format='dd/MM/yyyy'
            name='oneWay'
            value={oneWay}
            onChange={handleChange}
            variant='outlined'
          ></TextField>
          <TextField
            type='date'
            format='dd/MM/yyyy'
            name='returnFlight'
            value={returnFlight}
            disabled={noReturn}
            onChange={handleChange}
            variant='outlined'
          ></TextField>
          <Button
            type='submit'
            disabled={buttonDisabled}
            variant='contained'
            color='primary'
          >
            Book
          </Button>
        </FormControl>
      </Container>
    </>
  );
}
