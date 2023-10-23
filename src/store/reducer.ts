import { GlobalStateProps } from ".";
import { LOAD_QUERY } from "./actions";

export type ActionProps = {
  type: string;
  payload: any[];
};

export const dataReducer = (state: GlobalStateProps, actions: ActionProps) => {
  switch (actions.type) {
    case LOAD_QUERY:
      return state;

    default:
      return state;
  }
};
