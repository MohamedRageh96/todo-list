import React from "react";
import TodoListItem from "./TodoListItem";

// a main container of todolist
const TodoList = (props) => {

    return (
        <div className="card bg-light mb-3 mt-5">
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CreateTodoModal">Create Todo</button>
                </div>
                <div className="d-flex">
                    <ul className="list-group w-100">
                        {props.todoList.map((todo, index) => (
                        <TodoListItem 
                        key={index} 
                        data={todo} 
                        handleEditCheckTodo={props.handleEditCheckTodo} 
                        handleEditTodo={props.handleEditTodo}
                        handleDeleteTodo={props.handleDeleteTodo}
                        handleRerender={props.handleRerender}
                        handleArchiveTodo={props.handleArchiveTodo} />
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList