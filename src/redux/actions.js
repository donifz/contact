export const incre = () => {
  return {
    type: "INC",
  };
};

export const filt = (value) => {
  return {
    type: "FILTER",
    payload: value,
  };
};
