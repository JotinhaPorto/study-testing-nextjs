type Person = {
    id: string;
    name: string;
}
type AddAction = {
    type: "ADD";
    payload: {
        name: string;
    }
}
type RemoveAction = {
    type: "REMOVE";
    payload: {
        id: string;
    }
}

type ActionTypes = AddAction | RemoveAction

const initialState: Person[] = []

export const PeopleListReducer = (state: Person[] = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD":
            return [...state, { name: action.payload.name, id: state.length.toString() }]
        case "REMOVE":
            return state.filter(person => person.id !== action.payload.id)
    }
}
