'use client'

import { PeopleListReducer } from '@/reducer/peopleList'
import React, { useReducer, useRef } from 'react'
type List = {
    name: string,
}

const List = () => {
    const [state, dispatch] = useReducer(PeopleListReducer, [])
    const addItemsToList = (person: List) => {
        dispatch({
            payload: {
                name: person.name
            },
            type: "ADD"
        })
    }

    const removeItemsFromList = (id: string) => {
        dispatch({
            payload: { id },
            type: "REMOVE"
        })
    }
    const inputRef = useRef<HTMLInputElement>(null)
    // Testar o componente List, -parte de adição de elementos, -parte de remocão de elementos, -se a lista estiver vazia
    return (
        <div>
            <input type="text" placeholder='Digite seu nome' ref={inputRef} />
            <button onClick={() => addItemsToList({ name: inputRef.current!.value })}>Add</button>
            {state.length ? (
                <ul>
                    {state.map(person => (
                        <li key={person.id} className='flex gap-x-3'>
                            {person.name}
                            <button onClick={() => removeItemsFromList(person.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Nenhum item adicionado ainda</div>
            )
            }
        </div >
    )
}

export default List