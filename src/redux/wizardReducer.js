//Section 1 - Initial State
const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    mortgage: '',
    rent: '',
};

//Section 2 - Action Types
const ADD_HOUSE_INFO = 'ADD_HOUSE_INFO';
const ADD_IMAGE = 'ADD_IMAGE';
const ADD_PAYMENT = 'ADD_PAYMENT';


//Section 3 - Action Creators
export function addHouseInfo(value) {
    return {
        type: ADD_HOUSE_INFO,
        payload: value,
    }
}

export function addImage(value) {
    return {
        type: ADD_IMAGE,
        payload: value,
    }
}

export function addPayment(value) {
    return {
        type: ADD_PAYMENT,
        payload: value,
    }
}


//Section 4 - Reducer Function
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_HOUSE_INFO:
            return Object.assign({}, state, action.payload)
        case ADD_IMAGE:
            return Object.assign({}, state, action.payload)
        case ADD_PAYMENT:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
};