import React from "react";

export default function TasksCompleted(props) {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "35rem",
          height: `34rem`,
          paddingTop: "20px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title">
            <strong>Tasks Completed</strong>
          </h3>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.completedTasks.length !== 0
              ? ` Great! You have completed ${props.completedTasks.length} tasks`
              : `No Tasks Completed Yet!`}
          </h6>
          {props.completedTasks.map((element, key) => {
            return (
              <div key={key} className="h3">
                {element.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
