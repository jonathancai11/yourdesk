import { SIGNIN, SIGNOUT, 
  ADD_DESK_PRODUCT, CLEAR_ALL_DESK_PRODUCTS, DELETE_DESK_PRODUCT, ADD_DESK_PRODUCT_PROPERTIES, 
  TOGGLE_SELECTED_DESK_PRODUCT, TOGGLE_DESELECT_ALL_DESK_PRODUCTS, SET_ALL_DESK_PRODUCTS,
  SHOW_AUTH_MODAL, HIDE_AUTH_MODAL, SET_CURRENT_DESK_PRODUCT,
  SHOW_DESK_PRODUCT_MODAL, HIDE_DESK_PRODUCT_MODAL } from "./actionTypes";

let nextProductId = 0;

export const signIn = user => ({ 
  type: SIGNIN,
  payload: {
    user: user
  }
});

export const signOut = () => ({ 
  type: SIGNOUT,
});

export const addDeskProduct = deskProduct => {
  deskProduct.id =  ++nextProductId
  return ({
    type: ADD_DESK_PRODUCT,
    payload: {  
      id: deskProduct.id,
      deskProduct: deskProduct
    }
  });
}

export const setCurrentDeskProduct = deskProduct => {
  return ({
    type: SET_CURRENT_DESK_PRODUCT,
    payload: {
      deskProduct: deskProduct
    }
  })
}

export const addDeskProductProperties = deskProduct => ({
  type: ADD_DESK_PRODUCT_PROPERTIES,
  payload: {
    deskProduct: deskProduct
  }
});

export const clearAllDeskProducts = () => ({
  type: CLEAR_ALL_DESK_PRODUCTS,
});

export const deleteDeskProduct = deskProduct => ({
  type: DELETE_DESK_PRODUCT,
  payload: {
    deskProduct: deskProduct
  }
});

export const selectDeskProduct = deskProduct => ({
  type: TOGGLE_SELECTED_DESK_PRODUCT,
  payload: {
    deskProduct: deskProduct,
    selected: true
  }
});

export const deselectDeskProduct = deskProduct => ({
  type: TOGGLE_SELECTED_DESK_PRODUCT,
  payload: {
    deskProduct: deskProduct,
    selected: false
  }
});

export const showProductModal = () => ({
  type: SHOW_DESK_PRODUCT_MODAL
});

export const hideProductModal = () => ({
  type: HIDE_DESK_PRODUCT_MODAL
});

export const showAuthModal = () => ({
  type: SHOW_AUTH_MODAL
});

export const hideAuthModal = () => ({
  type: HIDE_AUTH_MODAL
});

export const deselectAllDeskProducts = () => ({
  type: TOGGLE_DESELECT_ALL_DESK_PRODUCTS
})

export const setAllDeskProducts = (deskProducts) => ({
  type: SET_ALL_DESK_PRODUCTS,
  payload: {
    deskProducts: deskProducts
  }
})