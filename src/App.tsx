import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import "./App.css";
import React from "react";

function App() {
  const personName = {
    first: "Thomas",
    last: "Aquinas",
  };

  const personList = [
    { first: "Thomas", last: "Aquinas" },
    { first: "Saint", last: "Augustine" },
    { first: "Napoleon", last: "Bonaparte" },
  ];

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => console.log({ id, event });

  return (
    <div className="App">
      <Greet name="Valongueiro" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="success" />
      <Heading>I am the Heading component.</Heading>
      <Oscar>
        <Heading>The Oscar goes to Aristotle!</Heading>
        <Heading>The Oscar goes to Plato!</Heading>
      </Oscar>
      <Greet name="Socrates" isLoggedIn={true} />
      <Button onClickHandler={onClickHandler} />
      <Input
        value=""
        onChangeHandler={(event) => {
          console.log(event.target.value);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
