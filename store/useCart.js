import { create } from 'zustand'
import cloneDeep from 'lodash/cloneDeep'
import round  from 'lodash/round'

const useCart = create((set) => ({
  cart : {}, totalPrice : 0,
  addToCart: (item) => set((state) => { 
   const id = Object.keys(state.cart)
   if(id.includes(String(item.id))){   
    const count =state.cart[item.id].count+1
    return(
      {
        cart: {
          ...state.cart, [item.id]: {...state.cart[item.id], count: count}
        },
        totalPrice : round(state.totalPrice + item.price,2)
      }
    )
   }
   return(
    {
      cart: {
        ...state.cart, [item.id]: {count: 1, price: item.price, imageUrl : item.url, title : item.title, id:item.id }
      },
      totalPrice : round(state.totalPrice + item.price,2)
    }
   )
  }),
  removeFromCart: (id, price) => set((state)=>{
    const obj = state.cart[String(id)]; 
   
    const count  = obj.count;
    if (count>1){
      return(
        {
          cart: {
            ...state.cart, [id]: { ...obj,  count: count-1}
          },
          totalPrice : round(state.totalPrice - price,2) 
        }
      )
    } else {
      const newCart = cloneDeep(state.cart)
      delete newCart[id]
      return(
        {
          cart: newCart,
          totalPrice : round(state.totalPrice - price,2)
        }
      )
    }
    
  }),
}))

export default useCart
