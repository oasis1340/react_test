import { useState } from "react"

const useInput = (initialState) => {
    const [value, setValue] = useState(initialState)
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
    return [value, onChangeValue, setValue]
}

export default useInput