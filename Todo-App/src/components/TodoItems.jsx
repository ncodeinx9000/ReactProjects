import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
