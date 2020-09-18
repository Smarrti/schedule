export const roles = {
  user: true,
};

export const switchRole = (state, action) => {
  switch (action.type) {
    case "SWITCH_ROLE":
      localStorage.setItem("user", !state.user);
      return { ...state, user: !state.user };
    case "GET_ROLE_FROM_LS":
      console.log(localStorage.getItem("user"));
      return { ...state, user: localStorage.getItem("user") === "true" };
    default:
      return { ...state };
  }
};
