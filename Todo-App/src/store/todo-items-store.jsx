import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: {},
  deleteItem: {},
});

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItem = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItem;
};

const todoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default todoItemContextProvider;
