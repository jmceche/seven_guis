import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles({
  mgbt: {
    marginBottom: "1rem",
  },
});

const Crud = () => {
  const classes = useStyles();
  const [person, setPerson] = useState({
    name: "",
    surname: "",
  });

  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState();

  const handleNames = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    if (person.name !== "" && person.surname !== "") {
      setPeople((prevpeople) => [
        ...prevpeople,
        { ...person, id: uuid(), filtered: true },
      ]);
    }
  };
  const handleUpdate = () => {
    const newPeople = [...people];
    if (selected) {
      const pos = newPeople.map((x) => x.id).indexOf(selected.id);
      newPeople[pos] = { ...newPeople[pos], ...person };
      setPeople(newPeople);
    }
  };
  const handleDelete = () => {
    const newPeople = people.filter((person) => person.id !== selected.id);
    setPeople(newPeople);
    setPerson({ name: "", surname: "" });
  };
  const handleSelect = (e) => {
    const sele = people.filter((person) => e.target.value === person.id);
    setSelected(sele[0]);
    setPerson({
      ...person,
      name: sele[0].name,
      surname: sele[0].surname,
    });
  };

  const handleFilter = (e) => {
    const newPeople = [...people];

    newPeople.forEach((person) => {
      if (
        person.surname.toLowerCase().indexOf(e.target.value.toLowerCase()) ===
        -1
      ) {
        person.filtered = false;
      } else {
        person.filtered = true;
      }
    });
    setPeople(newPeople);
  };

  return (
    <>
      <Container>
        <Grid container justify='center' spacing={2}>
          <Grid item container xs={4} justify='center'>
            <Grid item xs={12} className={classes.mgbt}>
              <TextField
                type='text'
                name='filter'
                label='Filter prefix:'
                id='filter'
                onChange={handleFilter}
              />
            </Grid>
            <Grid item xs={12} className={classes.mgbt}>
              <Select
                multiple
                native
                name='names'
                id='names'
                style={{ width: "300px" }}
                onChange={handleSelect}
              >
                {people.map(
                  (person) =>
                    person.filtered && (
                      <option value={person.id} key={person.id}>
                        {person.surname},{person.name}
                      </option>
                    )
                )}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button color='primary' onClick={handleCreate}>
                Create
              </Button>
              <Button onClick={handleUpdate}>Update</Button>
              <Button color='secondary' onClick={handleDelete}>
                Delete
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={4} justify='center' alignItems='center'>
            <Grid item xs={12}>
              <TextField
                label='Name:'
                type='text'
                name='name'
                onChange={handleNames}
                value={person.name}
                className={classes.mgbt}
              />

              <TextField
                label='Surname:'
                type='text'
                name='surname'
                onChange={handleNames}
                value={person.surname}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Crud;
