import React from "react";

export default function TasksPending(props) {
  return (
    <div>
      <div
        className="card overflow-auto"
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
            <strong>Pending Tasks</strong>
          </h3>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.pendingTasks.length !== 0
              ? `You have ${props.pendingTasks.length} tasks left to do`
              : `Hurray! No tasks pending.`}
          </h6>
          {props.pendingTasks.map((element, key) => {
            return (
              <div className="h3" key={key}>
                {element.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
