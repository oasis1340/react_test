import { createAction, handleActions } from 'redux-actions'

// 타입, 액션, 리듀서 제작
const BIGGER = "font/BIGGER"
const INPUT_BIGGER = "font/INPUT_BIGGER"

export const bigger = createAction(BIGGER)
export const inputBigger = createAction(INPUT_BIGGER)

const initialState = {
  fontSize : "1rem",
  inputFontSize : "1rem"
}

const font = handleActions({
  [BIGGER] : (state, action) => ({...state, fontSize : "3rem"}),
  [INPUT_BIGGER] : (state, action) => ({...state, inputFontSize : action.payload})
}, initialState)

export default font;