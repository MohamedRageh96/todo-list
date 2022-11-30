import React, {useState} from "react";
import GroupInput from "./GroupInput";
import TodoTextArea from "./TodoTextArea";

// Create Todo Modal used to create todos.
const EditTodoModal = (props) => {
    const [isPending, setIsPending] = useState(false);
    const [isErr, setIsErr] = useState(false);
    // a logical function to handle save changes action
    const handleSaveBtn = () => {
        setIsPending(true);
        setIsErr(false);
        const editTodoTitle = document.getElementById('editTodoTitle');
        const editTodoDescription = document.getElementById('editTodoDescription');
        const dateNdTime = new Date().toLocaleString();
        const dismissBtn = document.getElementById('editModalDismiss');

        if(editTodoTitle.value.trim() === "") {
            setIsErr(true);
            setIsPending(false);
        } else {
            props.filterTodo(props.currentTodoId).todo_title = editTodoTitle.value;
            props.filterTodo(props.currentTodoId).todo_description = editTodoDescription.value;
            setIsPending(false);
            props.handleRerender();
            dismissBtn.click();
        }
        
    };
    

    return (
        <div className="modal fade" id="EditTodoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="EditTodoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="EditTodoModalLabel">Create A New Todo</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="d-flex flex-column">
                        <div>
                            <span className="mb-2">Todo title</span>
                            <GroupInput inputId={'editTodoTitle'} placeholder={'Read a book'}
                             defaultValue={props.filterTodo(props.currentTodoId) ? props.filterTodo(props.currentTodoId).todo_title : ''} />
                        </div>
                        <div className="mt-4">
                            <span className="mb-2">Todo Description</span>
                            <TodoTextArea inputId={'editTodoDescription'} label={'Write a todo description'} placeholder={'Write a todo description'} 
                            defaultValue={ props.filterTodo(props.currentTodoId) ? props.filterTodo(props.currentTodoId).todo_description : ''} />
                        </div>
                        {isErr && <div className="d-flex justify-content-center mt-4">
                            <span className="text-danger">Please enter a todo title !</span>
                        </div>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button id="editModalDismiss" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-success" onClick={() => handleSaveBtn()} disabled={isPending}>
                        {!isPending && <span>Save Changes</span>}
                        {isPending && <span>Loading</span>}
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
};

export default EditTodoModal;