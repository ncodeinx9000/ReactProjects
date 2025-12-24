import "bootstrap/dist/css/bootstrap.min.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go To College",
      dueDate: "4/10/23",
    },
  ];

  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo></AddTodo>
      <TodoItems key={todoItems} todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
