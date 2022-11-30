import React from "react";

const GroupInput = (props) => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" placeholder={props.placeholder} id={props.inputId} defaultValue={props.defaultValue} />
        </div>
    )
}

export default GroupInput