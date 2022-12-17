import "./App.css";

import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addNewTask = () => {
    setTodoList([...todoList, newTask]);
  };
  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else return true;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <div className="addNewTask">
        <input onChange={handleChange} />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h3>{task}</h3>
              <button onClick={() => deleteTask(task)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
