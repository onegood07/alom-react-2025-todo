import { useState } from "react";
import { FormButton, ToDoInput, RemoveButton, ToDoListItem } from "../styles/styles";
import { useLocalStorage } from "../utils/useLocalStorage";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState(() => {
    const savedToDoList = JSON.parse(localStorage.getItem("toDoList"));
    return savedToDoList ? savedToDoList : [];
  });

  const onChangeToDo = (event) => setToDo(event.target.value);
  const onSubmitToDo = (event) => {
    event.preventDefault();
    if (toDo.trim() === "") return;
    setToDoList((currentToDoList) => [toDo, ...currentToDoList]);
    setToDo("");
  };
  const removeToDo = (removeIndex) =>
    setToDoList(toDoList.filter((_, index) => index !== removeIndex));

  useLocalStorage("toDoList", toDoList);

  return (
    <div>
      <h1>😉 My To-Do-List ({toDoList.length})</h1>
      <form onSubmit={onSubmitToDo}>
        <ToDoInput
          onChange={onChangeToDo}
          type="text"
          value={toDo}
          placeholder="Write your to do..."
        />
        <FormButton>Add To Do</FormButton>
      </form>
      <hr />
      {toDoList.map((toDo, index) => (
        <ToDoListItem>
          <RemoveButton onClick={() => removeToDo(index)}>X</RemoveButton>
          {toDo}
        </ToDoListItem>
      ))}
    </div>
  );
}

export default ToDo;
