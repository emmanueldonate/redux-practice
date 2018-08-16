const intialState = {
  all: [],
  selected: {}
};

export default (state = intialState, { type, payload }) => {
  switch (type) {
    case "ADD_CAT":
      const all = [...state.all];
      all.push(payload);
      return { ...state.all };
    default:
      return state;
  }
};
