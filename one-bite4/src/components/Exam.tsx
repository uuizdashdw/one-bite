import { useReducer } from "react";

interface Action {
    type: string;
    data: number;
}

function reducer(state: number, action: Action): number {
    if(action.type === 'increase') return state + action.data;
    if(action.type === 'decrease') return state - action.data;
    return state;
}

const Exam = (): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, 0);

    const onClickToPlus = (): void => {
        dispatch({ type: 'increase', data: 1 });
    }

    const onClickToMinus = (): void => {
        dispatch({ type: 'decrease', data: 1 });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickToPlus}>+</button>
            <button onClick={onClickToMinus}>-</button>
        </div>  
    )
}

export default Exam;