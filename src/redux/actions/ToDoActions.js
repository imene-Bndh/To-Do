// Add to the list
export const addTodo = (payload) => {
    return { type: "ADD", payload };
  };
  // Delete task from the list
  export const deletList = (payload) => {
    return { type: "DELETE", payload };
  };
  // update task of the list
  export const editList = (payload) => {
    return { type: "EDIT", payload };
  };
  
  // Mark task as completed
  export const complete = (payload) => {
    return { type: "COMPLETE",payload};
  };