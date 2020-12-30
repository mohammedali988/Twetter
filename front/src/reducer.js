import check from "./pages/signin"

const state1 = {
    name: "",
    check1: false
}

const appReducer = (state=state1,action) =>{
    console.log(action.Payload, 'hereeeeeeeeee')
    if(action.type === 'true'){
        state = {
            ...state,
            name: action.Payload,
            check1 : true
        }
        console.log(state, "stateeeeeeeeeeeee")
        return state
    }else return { state }

}
console.log(state1, "hiiiiiiiiiiiiiiiiii")
export default appReducer;