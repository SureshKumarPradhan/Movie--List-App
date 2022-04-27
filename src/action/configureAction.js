export const addData = (data) => {
    return{
        type:"ADD_DATA",
        payload:data
    }
}

export const handel_remove = (id) => {
    return{
        type:"HANDEL_REMOVE",
        payload:id
    }
}
// export const handel_search = (val) => {
//     return{
//         type:"HANDEL_SEARCH",
//         payload:val
//     }
// }