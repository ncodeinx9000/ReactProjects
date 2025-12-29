import "bootstrap/dist/css/bootstrap.min.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);

    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     {
    //       name: itemName,
    //       dueDate: itemDueDate,
    //     },
    //   ];
    //   return newTodoItems;
    // });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        key={todoItems}
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
