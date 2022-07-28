let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        let newState = { ...state };
        if (action.payload.checkboxValue) {
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
          };
        } else {
          newState.selectedItems = {
            items: [
              ...newState.selectedItems.items.filter(
                (item) => item.item.title != action.payload.item.title
              ),
            ],
          };
        }
        return newState;
      }
      break;

    default:
      return state;
      break;
  }
};

export default cartReducer;
