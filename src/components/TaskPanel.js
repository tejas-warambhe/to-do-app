import React from "react";

export default function TaskPanel(props) {
  const deleteElement = () => {
    const filtered = props.todos.filter((element) => {
      if(element.id !== props.id) {
        return element;
      }
      return false;
    })
      props.setTodos(
        filtered
      );
    
    props.showAlert("Task Deleted", "success");
  };
  
  const changeStatus = () => {
    
      const filtered = props.todos.map((element) => {
        if(element.id === props.id)element.status = !element.status;
        return element;
      })
      props.setTodos(
          filtered
 
      );
    
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <li>
            <div className="container">
              <div
                className="card"
                style={{ width: "58rem", marginTop: "25px" }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      cursor: "pointer",
                      textDecoration: props.status ? "line-through" : "none",
                      fontStyle: props.status ? "italic" : "normal",
                    }}
                    onClick={changeStatus}
                  >
                    {props.text}
                  </h5>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="col" style={{ marginTop: "33px" }}>
          <button className="btn btn-lg btn-danger" onClick={deleteElement}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
