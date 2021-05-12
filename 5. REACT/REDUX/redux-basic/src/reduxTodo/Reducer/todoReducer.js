const initialData = {
  list: [],
};
const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if (data && data.length > 2) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_ALL":
      return {
        ...state,
        list: [],
      };

    /* 
      !Error: The slice reducer for key "todoReducer" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
      */
    default:
      return state;
  }
};

export default todoReducer;
