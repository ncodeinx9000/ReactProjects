import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
function TodoItems({ todoItems }) {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
