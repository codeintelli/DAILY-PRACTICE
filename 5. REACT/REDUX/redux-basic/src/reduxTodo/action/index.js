export const add = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Math.floor(Math.random() * 1000000),
      data: data,
    },
  };
};
export const del = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
export const clearall = () => {
  return {
    type: "REMOVE_ALL",
  };
};
