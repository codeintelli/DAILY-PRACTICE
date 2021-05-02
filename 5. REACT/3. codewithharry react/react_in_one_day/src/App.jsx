import React, { useState, useEffect } from "react";
import Header from "./TODOAPP/Header";
import AddTodo from "./TODOAPP/AddTodo";
import TodoList from "./TODOAPP/Todolist";
// import Footer from "./TODOAPP/Footer";
const App = () => {
  if (localStorage.getItem("todos") === null) {
    let initTodo;
    initTodo = [];
  } else {
    let initTodo;
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("We Are Deleting", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log(`Title:- ${title} And Description :- ${desc}`);
    // const i = 1;
    // let sno = i + 1;

    // now like professional
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodos);
    setTodos([...todos, myTodos]);
  };
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  return (
    <>
      <Header title="Magic Notes" />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </>
  );
};

export default App;
