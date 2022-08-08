import React, { useState }  from "react";
import { addTodo } from "../redux/actions/ToDoActions"; // Import function actions
import { v4 as uuidv4 } from "uuid"; // Generate id for tasks
import { useDispatch } from "react-redux";
function Addtask() {

  // State to get the input task
  const [input, setInput] = useState("");
  // dispatch info state
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add todo"
        onChange={handleChange}
        name="text"
        className="todo-input"
        value={input}
        
      />

      <button
        className="todo-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addTodo({ id: uuidv4(), task: input, check: false }));
          setInput("");
          
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default Addtask;