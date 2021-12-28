import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState);

    const cambiaInput = ({ target }) => {

         setFormState({
             ...formState,
             [target.name]: target.value

         })
        // console.log(formState)
    }

    const reset = ()=>{
        setFormState(initialState)
    }

    return [formState, cambiaInput, reset]

}