import React, { createContext, useContext, useReducer } from 'react'

const CartStateContex = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{

}

export const CartProvider =({childern}) =>{

    const[state, dispatch] = useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch}>
    <CartStateContex.Provider value={state}>
        {childern} 
    </CartStateContex.Provider>
</CartDispatchContext.Provider>

    )
}
export const useCart = () => useContext(CartStateContex);
export const useDispatchCart = () => useContext(CartDispatchContext);
