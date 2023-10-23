import { GlobalStateProps } from ".";
import { LOAD_QUERY, SELECT_QUERY } from "./actions";

export type ActionProps = {
  type: string;
  payload?: any[] | any;
};

export const dataReducer = (state: GlobalStateProps, actions: ActionProps) => {
  switch (actions.type) {
    case LOAD_QUERY:
      return state;

    case SELECT_QUERY:
      return { ...state, query: actions.payload };

    default:
      return state;
  }
};
