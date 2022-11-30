import React, {useState} from "react";
import GroupInput from "./GroupInput";
import TodoTextArea from "./TodoTextArea";

// Create Todo Modal used to create todos.
const CreateTodoModal = (props) => {
    const [isPending, setIsPending] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [todoId, setTodoId] = useState(0);

    //  a logical function to handle create new Todo. 
    const handleCreatebtn = () => {
        setIsPending(true);
        setIsErr(false);
        const newTodoTitle = document.getElementById('newTodoTitle');
        const newTodoDescription = document.getElementById('newTodoDescription');
        const dateNdTime = new Date().toLocaleString();
        const dismissBtn = document.getElementById('newModalDismiss');

        if(newTodoTitle.value.trim() === "") {
            setIsErr(true);
            setIsPending(false);
        } else {
            const todoInputs = {
                todo_id: todoId,
                todo_title: newTodoTitle.value,
                todo_description: newTodoDescription.value,
                created_at: dateNdTime,
                finished_at: undefined,
                archive_at: undefined,
            }
    
            props.handleAddNewTodo(todoInputs);
            setTodoId(todoId + 1);
            setIsPending(false);
            dismissBtn.click();
        }
        
    }
    // a logical function to handle cancel btn and set all states to initial state.
    const handleCancelBtn = () => {
        const newTodoTitle = document.getElementById('newTodoTitle');
        const newTodoDescription = document.getElementById('newTodoDescription');
        newTodoTitle.value = '';
        newTodoDescription.value = '';
    }

    return (
        <div className="modal fade" id="CreateTodoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="CreateTodoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="CreateTodoModalLabel">Create A New Todo</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="d-flex flex-column">
                        <div>
                            <span className="mb-2">Todo title</span>
                            <GroupInput inputId={'newTodoTitle'} placeholder={'Read a book'} />
                        </div>
                        <div className="mt-4">
                            <span className="mb-2">Todo Description</span>
                            <TodoTextArea inputId={'newTodoDescription'} label={'Write a todo description'} placeholder={'Write a todo description'} />
                        </div>
                        {isErr && <div className="d-flex justify-content-center mt-4">
                            <span className="text-danger">Please enter a todo title !</span>
                        </div>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button id="newModalDismiss" type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleCancelBtn()}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={() => handleCreatebtn()} disabled={isPending}>
                        {!isPending && <span>create</span>}
                        {isPending && <span>Loading</span>}
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodoModal