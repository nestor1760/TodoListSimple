import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, remove}) => {
    return (
        <ul>
            {todos.map((todo, index) => 
                <TodoItem id={todo.id} remove={remove} number={index} todo={todo} key={todo.id}/>    
            )}
        </ul>
    )   
}

export default TodoList;