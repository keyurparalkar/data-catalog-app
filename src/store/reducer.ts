import { GlobalStateProps } from ".";
import { LOAD_META_DATA, RUN_QUERY, SELECT_QUERY } from "./actions";

export type ActionProps = {
  type: string;
  payload?: any[] | any;
};

export const dataReducer = (
  state: GlobalStateProps,
  actions: ActionProps
): GlobalStateProps => {
  switch (actions.type) {
    case RUN_QUERY: {
      return {
        ...state,
        datasource: {
          ...state.datasource,
          data: actions.payload.data,
          meta: {
            ...state.datasource?.meta,
            fields: actions.payload.meta.fields,
          },
        },
      };
    }

    case SELECT_QUERY: {
      return { ...state, query: actions.payload };
    }

    case LOAD_META_DATA: {
      return {
        ...state,
        datasource: {
          ...state.datasource,
          meta: actions.payload,
        },
      };
    }

    default:
      return state;
  }
};
