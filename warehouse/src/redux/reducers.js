const initialState = {
    warehouses: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_WAREHOUSES':
        return { ...state, warehouses: action.payload };
      case 'UPDATE_WAREHOUSE':
        return {
          ...state,
          warehouses: state.warehouses.map((w) =>
            w.id === action.payload.id ? action.payload : w
          ),
        };
      
      default:
        return state;
    }
  };
  
  export default rootReducer;