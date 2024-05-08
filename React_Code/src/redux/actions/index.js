//Add Items To cart
export const addItem=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//Delete Items from cart
export const delItem=(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}