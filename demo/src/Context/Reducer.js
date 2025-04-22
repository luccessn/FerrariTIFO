import { appActions } from "./AppActions";

export const Initials = {
  visibleIn: true,
  visibleOut: false,
};

export const appReducer = (state, actions) => {
  const { type } = actions;
  switch (type) {
    case appActions.HIDE:
      return { ...state, visibleIn: false };
    case appActions.UNHIDE:
      return { ...state, visibleOut: true };
    default:
      return { ...state };
  }
};
