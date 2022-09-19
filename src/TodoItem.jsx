import { useContext } from "react"
import { TodoContext } from "./context/TodoContext"


export const TodoItem = ({ todo }) => {

    const {handleDeleteTodo,handleToggleTodo} = useContext(TodoContext);

    const onButtonDelete = (ev) => {

        handleDeleteTodo(todo)

    }

    const onToggleTodo = (ev) => {

        handleToggleTodo(todo);

    }

    const estiloTodo = () => {
        if (todo.done) {
            return {
                textDecoration: "line-through"
            }
        }
        return {
            textDecoration: "unset"
        }
    }

    return (
        <li
            className="list-group-item d-flex justify-content-between">
            <span
                className="align-self-center"
                onClick={onToggleTodo}
                style={estiloTodo()}
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={onButtonDelete}
            >Borrar
            </button>
        </li>
    )
}
