import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import { useForm } from "./useForm";





export const TodoAdd = () => {

    const {handleNewTodo} = useContext(TodoContext)


    //el useForm tiene un usestate que con tiene como estado
    //el valor de todos los inputs del form
    //si algun input cambia se cambia el estado del formulario
    const {formState, onFormState, onReset} = useForm({
        todo: ""
    })

    const onFormSubmit = (ev) => {
        ev.preventDefault();

        if(formState.todo.length<1){
            return
        }

        const todo = {
            id: new Date().getTime(),
            description: formState.todo,
            done: false
        }
        
        //mandamos a llamar el metodo si existe si no no
        handleNewTodo && handleNewTodo(todo)
        onReset();
    }



    return (
        <form onSubmit={onFormSubmit}>
            <input
                name = "todo"
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                value = {formState.todo}
                onChange={onFormState}
            />

            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
