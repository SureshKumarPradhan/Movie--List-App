
const initialState = [];

const movieReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_DATA":{
            return [...state,{...action.payload}]
        }
        case "HANDEL_REMOVE" : {
            return(
                state.filter(val=>{
                    return val.id !== action.payload
                })
            )
        }
        //  case "HANDEL_SEARCH" : {
        //      if(action.payload === ""){
        //       return [...state]
        //      }else {

        //       return( state.filter(val=>{
        //              return val.moviename.includes(action.payload)
        //          })
        //       )
        //      }
              

        //  }
        default :{
         return   [...state]
        }
    }
}

export default movieReducer;