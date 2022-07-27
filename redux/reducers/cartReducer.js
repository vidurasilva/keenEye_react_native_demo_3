let defaultState = {
  selectItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        let newState = { ...state };
        if (action.payload.checkboxValue) {
          console.log("ADD_TO_CART");
          newState.selectItems = {
            items: [...newState.selectItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
          };
        } else {
          console.log("REMOVE CART");
          newState.selectItems = {
            items: [
              ...newState.selectItems.items.filter(
                (item) => item.title != action.payload.title
              ),
            ],
            restaurantName: action.payload.restaurantName,
          };
        }
        console.log(newState, "🔺");
        return newState;
      }
      break;

    default:
      return state;
      break;
  }
};

export default cartReducer;
