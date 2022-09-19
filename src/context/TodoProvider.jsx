import { useTodos } from "../useTodos"
import { TodoContext } from "./TodoContext";


export const TodoProvider = ({children}) => {

    const { todos,
        todosCount,
        pendingCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo } = useTodos();
    


    return(
        <TodoContext.Provider value = {{
            todosCount,pendingCount,todos,handleNewTodo,handleDeleteTodo,handleToggleTodo}}>
            {children}
        </TodoContext.Provider>
    )

}