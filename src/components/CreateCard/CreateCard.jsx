import React, { useState } from "react";

const CreateCard = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="AddTaskBtn" type="submit">Add Task</button>
    </form>
  );
};

export default CreateCard;
