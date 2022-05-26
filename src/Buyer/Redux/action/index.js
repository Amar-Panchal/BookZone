export const addItem = (book) =>{
    return{
        type : "ADDITEM",
        payload :  book
    }
}
export const delItem = (book) =>{
    return{
        type : "DELETEITEM",
        payload :  book
    }
}
