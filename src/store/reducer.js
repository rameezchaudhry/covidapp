const INITIAL_STATE={
    covidStatus:"covid data",

}
const reducer = (state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case "UPDATE":
        state.covidStatus=action.covidStatus;
        break;
    
        default:
            return state
            break;
        
    }
}
export default reducer