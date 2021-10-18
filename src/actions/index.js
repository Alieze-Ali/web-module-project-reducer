export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// Task 6b: Create action creator that takes in an operator as an argument and creates and action object with the type 'CHANGE_OPERATION'
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

// Task 7b: add action creator (above) and const for CLEAR_DISPLAY
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

// Task 8a-2: add action creator (above) and const for MEMORY_ADD
export const addMemory = () => {
    return({type:MEMORY_ADD});
}

// Task 8b-2: add action creator (above) and const for MEMORY_APPLY
export const applyMemory = () => {
    return({type:MEMORY_APPLY});
}

// TASK 8C-2: add action creator (above) and const for MEMORY_CLEAR
export const clearMemory = () => {
    return({type:MEMORY_CLEAR});
}