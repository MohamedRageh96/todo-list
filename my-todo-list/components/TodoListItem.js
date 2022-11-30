import React from "react";

const TodoListItem = (props) => {
    //  logical funtion to handle checkbox change action.
    const handleOnChagngeCheck = (todo_id) => {
        const checkbox = document.getElementById(`todoCheckBox${todo_id}`);
        props.handleEditCheckTodo(todo_id , checkbox.checked);
       
    }
    // a logical function to handle edit todo modal
    const handleEditModal = (todo_id) => {
        props.handleEditTodo(todo_id)
    }
    // a logical function to handle Delete todo modal
    const handleDeleteTodo = (todo_id) => {
        props.handleDeleteTodo(todo_id);
        props.handleRerender()
    }
    // a logical function to handle Archive todo modal
    const handleArchiveTodo = (todo_id) => {
        props.handleArchiveTodo(todo_id);
        props.handleRerender();
    }

 return (
        <li id={`todoNum${props.data.todo_id}`} className="list-group-item d-flex justify-content-around mt-4">
            <div className="d-flex flex-column">
                <span className="fw-bold">Todo Title:</span>
                <span>{props.data.todo_title}</span>
            </div>
            <div className="d-flex flex-column">
                <span className="fw-bold">Todo Description:</span>
                <span className="descSpan">{props.data.todo_description}</span>
            </div>
            <div className="d-flex flex-column">
                <span className="fw-bold">Todo Created At:</span>
                <span>{props.data.created_at}</span>
            </div>
            <div className="d-flex flex-column">
            {props.data.finished_at &&  <>
                <span className="fw-bold">Todo Finished At:</span>
                <span>{props.data.finished_at}</span>
            </>}
            </div>
            <div className="d-flex flex-column">
            {props.data.archive_at &&  <>
                <span className="fw-bold">Todo Archived At:</span>
                <span>{props.data.archive_at}</span>
            </>}
            </div>
            <div className="d-flex h-100">
                <a type="button" className="text-decoration-none me-3 ms-3" onClick={() => handleDeleteTodo(props.data.todo_id)}>
                    <span className="text-danger fw-bold">Delete</span>
                </a>
                <a data-bs-toggle="modal" data-bs-target="#EditTodoModal" type="button" className="text-decoration-none" onClick={() => handleEditModal(props.data.todo_id)}>
                    <span className="text-primary fw-bold">Edit</span>
                </a>
            </div>
            <div className="d-flex flex-column align-items-center h-100">
                <span className="fw-bold">Done:</span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`todoCheckBox${props.data.todo_id}`} onChange={() => {
                        handleOnChagngeCheck(props.data.todo_id)
                    }} />
                 </div>
            </div>
            { props.data.finished_at && !props.data.archive_at && <div className="d-flex">
                <button className="btn btn-sm btn-primary" onClick={() => handleArchiveTodo(props.data.todo_id)}>Move To Archive</button>
            </div>}
        </li>
 )
}

export default TodoListItem