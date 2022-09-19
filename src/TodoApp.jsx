import React from "react";
import { useTodos } from "./useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoProvider } from "./context/TodoProvider";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";



export const TodoApp = () => {

    const { todosCount, pendingCount } = useContext(TodoContext);

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {<TodoList />}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {<TodoAdd />}
                </div>
            </div>
        </>
    )
}
