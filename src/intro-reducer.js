

const initialState = [{
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false
}];

//Un reducer no es más que una función que nos retorna un nuevo estado
//además recibe dos parámetros, el primero es el estado anterior y el segundo
//es la accion que se va a realizar para cambiar el estado
const todoReducer = ( state = initialState, action = {}) => {

    if(action.type === "[TODO] add todo"){
        state = [...state,action.payload];
        return state
    }

    return state;
}

const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false
}

const addTodoAction = {
    type : "[TODO] add todo",
    payload: {
        newTodo
    }
}



let todos = todoReducer();

todos = todoReducer(todos,addTodoAction)


console.log({state:todos}); 