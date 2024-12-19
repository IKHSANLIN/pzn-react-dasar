import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../../todolist/TodoList";
import Table from "../../table/Table";
import AlertButton from "../button/AlertButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text={"Click me"} message={"Hello World"} />
      <AlertButton text={"Click me"} message={"Hello Ikhsan"} />
    </Container>
  </StrictMode>
);
