import React from "react";

const TodoTextArea = (props) => {
    return (
        <div className="form-floating">
            <textarea className="form-control" placeholder={props.placeholder} id={props.inputId} defaultValue={props.defaultValue}></textarea>
            <label htmlFor="floatingTextarea2">{props.label}</label>
        </div>
    )
}

export default TodoTextArea