import React, { useEffect } from "react";
import TasksPending from "./TasksPending";
import TasksCompleted from "./TasksCompleted";

export default function Home({ curState, setState, todos, mode }) {
  const motivationApi = async () => {
    let URL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    let incomingData = await fetch(URL);
    let parsedData = await incomingData.json();
    let quote = parsedData.quotes[0].text;
    console.log(quote);
    setState(parsedData.quotes[0]);
  };
  useEffect(() => {
    motivationApi();
  }, []);

  return (
    <div>
      <div className="container" >
        <div className="row">
          <div className="col d-flex ">
            <TasksPending
              pendingTasks={todos.filter((element) => !element.status)}
            />
          </div>
          <div className="col">
            <TasksCompleted
              completedTasks={todos.filter((element) => element.status)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col container my-5">
            <figure>
              <blockquote className="blockquote mb-4">
                <p>
                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                  <span
                    className="font-italic"
                    style={{ color: mode === "light" ? "black" : "white" }}
                  >
                    {curState.text}
                  </span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {curState.author}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
