import check from "./pages/signin"

const state1 = {
    name: "",
    check1: false
}


const appReducer = (state=state1,action) =>{
    console.log(action.type, 'hereeeeeeeeee')
    if(action.type === 'true'){
        return{
            ...state,
            check1 : true
        } 
    }
    else return { state }

}

export default appReducer;