import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo created");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
