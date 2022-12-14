import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import { TodoItem } from "./TodoItem";


export const TodoList = () => {

    const {todos} = useContext(TodoContext)

    return (
        <ul className="list-group">
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    )
                })
            }
        </ul>
    )
}
