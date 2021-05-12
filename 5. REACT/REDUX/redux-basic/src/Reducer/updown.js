// HOW TO DO

const initialstate = 0;
const changeNumber = (state = initialstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeNumber;
