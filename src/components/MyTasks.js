import React, { useState } from "react";
import TaskPanel from "./TaskPanel";

export default function MyTasks({ todos, setTodos, showAlert, mode }) {

  const [text, setText] = useState("");

  const grabText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const addTask = () => {
    text &&
      setTodos([
        ...todos,
        { text: text, status: false, id: Math.floor(Math.random() * 1000) },
      ]);
    setText("");
    showAlert("Task Added", "success");
  };

  return (
    <>
      <div className="container">
        <div
          className="card"
          style={{
            width: "80rem",
            height: `${Math.max(todos.length * 10, 40)}rem`,
            paddingTop: "20px",

            marginTop: "40px",
          }}
        >
          <div className="card-body" >
            <h2 className="card-title" style={{ textAlign: "center" }}>
              <b>Add/Remove Tasks</b>
            </h2>
            <div className="my-4" >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Task is waiting here"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  value={text}
                  onChange={grabText}
                  style={{
                    height: "50px",
                    marginLeft: "90px",
                    marginRight: "50px",
                  }}
                />
                <div className="input-group-append">
                  <button
                    onClick={addTask}
                    style={{ height: "50px", marginRight: "60px" }}
                    className="btn btn-success"
                    type="button"
                    id="button-addon2"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>

            <div className="container mx-5 my-4">
              <ol style={{ marginTop: "30px" }}>
                {todos.map((element) => {
                  return (
                    <TaskPanel
                      showAlert={showAlert}
                      changeStatus={element.changeStatus}
                      text={element.text}
                      status={element.status}
                      key={element.id}
                      id={element.id}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
