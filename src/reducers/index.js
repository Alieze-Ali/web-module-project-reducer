import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_ADD, MEMORY_APPLY, MEMORY_CLEAR } from './../actions';

export const initialState = {
    // Task 3e
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        // Task 7a: add case for CLEAR_DISPLAY
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                // this is what's changing 
                total: 0
            });

        // Task 8a-1: setting up M+ button functionality, add case & import above
        case(MEMORY_ADD):
            return({
                ...state,
                // the memory value is changed & should have total value inside of it
                memory: state.total
            })
            
        // Task 8b-1: setting up MR button functionality with new case
        case(MEMORY_APPLY):
            return({
                ...state,
                // updating the total - ??? this one I didn't know
                total: calculateResult(state.total, state.memory, state.operation)
            })

        // Task 8c-1: setting up MC button fucntionality with new case
        case(MEMORY_CLEAR):
            return({
                ...state,
                memory: 0
            })

        default:
            return state;
    }
}

export default reducer;