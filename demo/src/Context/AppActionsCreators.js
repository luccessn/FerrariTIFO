import { appActions } from "./AppActions";

export const HideItemActions = () => {
  return { type: appActions.HIDE };
};

export const UnHideItemActions = () => {
  return { type: appActions.UNHIDE };
};
