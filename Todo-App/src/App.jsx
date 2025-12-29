import "bootstrap/dist/css/bootstrap.min.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

import TodoItemsContextProvider from "./store/todo-items-store";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AddName></AddName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
