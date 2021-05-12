// what to do

export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const mulNumber = () => {
  return {
    type: "MULTIPLY",
  };
};
export const divNumber = () => {
  return {
    type: "DIVIDE",
  };
};
