import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { v4 as uuid } from "uuid";

const Crud = () => {
  const [person, setPerson] = useState({
    name: "",
    surname: "",
  });

  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState();
  const [filtered, setFiltered] = useState();

  const handleNames = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    setPeople([...people, { ...person, id: uuid() }]);
  };
  const handleUpdate = () => {
    const newPeople = [...people];
    const pos = newPeople.map((x) => x.id).indexOf(selected.id);
    newPeople[pos] = person;
    setPeople(newPeople);
    setFiltered(newPeople);
  };
  const handleDelete = () => {
    const newPeople = people.filter((person) => person.id !== selected.id);
    setPeople(newPeople);
    setFiltered(newPeople);
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
    if (!e.target.value) {
      setFiltered(null);
    } else {
      const newPeople = people.filter(
        (person) =>
          person.surname.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
          -1
      );
      setFiltered(newPeople);
    }
  };

  return (
    <Container>
      <Grid container justify='center'>
        <Grid item xs={8}>
          <label htmlFor='filter'>Filter prefix:</label>
          <input
            type='text'
            name='filter'
            if='filter'
            onChange={handleFilter}
          />
        </Grid>
        <Grid item xs={5}>
          <select
            name='names'
            id='names'
            multiple
            style={{ width: "300px" }}
            onChange={handleSelect}
          >
            {filtered
              ? filtered.map((person) => (
                  <option value={person.id} key={person.id}>
                    {person.surname},{person.name}
                  </option>
                ))
              : people.map((person) => (
                  <option value={person.id} key={person.id}>
                    {person.surname},{person.name}
                  </option>
                ))}
          </select>
        </Grid>
        <Grid item container xs={3} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              onChange={handleNames}
              value={person.name}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor='surname'>Surname</label>
            <input
              type='text'
              name='surname'
              onChange={handleNames}
              value={person.surname}
            />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <button onClick={handleCreate}>Create</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Crud;
