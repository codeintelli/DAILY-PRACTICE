// HOW TO DO

const initialstate = 1;
const calNumber = (state = initialstate, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return state * 5;
    case "DIVIDE":
      return state / 5;
    default:
      return state;
  }
};

export default calNumber;
