export const setAllData = (datas) => {
  return {
    type: "SETALLDATA",
    items: datas,
  };
};

export const filt = (value) => {
  return {
    type: "FILTER",
    payload: value,
  };
};

export const sortAZ = () => {
  return {
    type: "SORTAZ",
  };
};

export const sortZA = () => {
  return {
    type: "SORTZA",
  };
};

export const favor = (id) => {
  return {
    type: "FAVORITE",
    payload: id,
  };
};

export const change = (id, info) => {
  return {
    type: "CHANGECONTACT",
    payload: {
      id,
      info,
    },
  };
};
