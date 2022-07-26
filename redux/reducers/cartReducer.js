let defaultState = {
  selectItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        let newState = { ...state };
        newState.selectItems = {
          items: [...newState.selectItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
        console.log(newState, "🔺");
      }
      break;

    default:
      return state;
      break;
  }
};

export default cartReducer;
