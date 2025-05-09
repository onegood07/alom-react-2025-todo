import { useEffect, useState } from "react";
import "../styles/button.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(() => {
    const savedToDos = JSON.parse(localStorage.getItem("toDos"));
    return Array.isArray(savedToDos) ? savedToDos : [];
  });

  const onChangeToDo = (event) => setToDo(event.target.value);
  const onSubmitToDo = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo("");
  };
  const removeToDo = (removeIndex) => setToDos(toDos.filter((_, index) => index !== removeIndex));

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div>
      <h1>😉 My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmitToDo}>
        <input
          className="toDo-form"
          onChange={onChangeToDo}
          type="text"
          value={toDo}
          placeholder="Write your to do..."
        />
        <button className="toDo-form-button">Add To Do</button>
      </form>
      <hr />
      {toDos.map((toDo, index) => (
        <div className="toDo-list-item" key={index}>
          <button className="remove-button" onClick={() => removeToDo(index)}>
            X
          </button>
          {toDo}
        </div>
      ))}
    </div>
  );
}

export default App;
