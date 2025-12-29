import { useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on ${dueDate}`);
    addNewItem(todoName, dueDate);
  };

  return (
    <>
      <div className="container text-center">
        <form className="row kg-row">
          <div className="col-4">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
