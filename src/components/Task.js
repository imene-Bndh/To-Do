
import React from "react";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { complete, editList, deletList } from "../redux/actions/ToDoActions"; // Import function actions
import { useDispatch } from "react-redux";

function Task({ task }) {
    const dispatch = useDispatch(); // dispatch info state
    const [showEdit, setShowEdit] = useState(false); // show Edit form
    const [input, setInput] = useState(""); // Input for the new input
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div
            className={task.check ? "todo-row complete" : "todo-row"} // If checked task add class complete
            key={task.id}
        >
            <div>{task.task}</div>
            <div className="icons">
                <RiCloseCircleLine
                    className="delete-icon"
                    onClick={(e) => {
                        dispatch(deletList(task));
                    }}
                />
                <input
                    type="checkbox"
                    className="check"
                    onClick={(e) => {
                        task.check = !task.check;
                        dispatch(complete());
                    }}
                />
                <TiEdit className="edit-icon" onClick={(e) => setShowEdit(!showEdit)} />
            </div>
            {showEdit && (
                <div>
                    <input
                        placeholder={task.task}
                        value={input}
                        onChange={handleChange}
                        className="todo-input edit"
                    />
                    <button
                        className="todo-button edit"
                        onClick={(e) => {
                            dispatch(editList({ id: task.id, newTask: input }));
                            setShowEdit(!showEdit);
                        }}>Update</button>
                </div>
            )}
        </div >
    );
}

export default Task;
