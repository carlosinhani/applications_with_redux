const initialState = {
    list: [
    {
        id : 1,
        name: 'Primeiro Item'
    },
    {
        id : 2,
        name: 'Segundo Item'
    }
  ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, list: [...state.list, action.payload] };

        default:
            return state;    
    }
}