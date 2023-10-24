import { GlobalStateProps } from ".";
import {
  LOAD_META_DATA,
  RUN_QUERY,
  SELECT_QUERY,
  SELECT_TABLE,
} from "./actions";

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
      const { data, meta } = actions.payload;
      return {
        ...state,
        datasources: {
          ...state.datasources,
          [state.selectedTable]: {
            ...state.datasources[state.selectedTable],
            data: data,
            meta: {
              ...state.datasources[state.selectedTable].meta,
              fields: meta.fields,
            },
          },
        },
      };
    }

    case SELECT_QUERY: {
      return {
        ...state,
        datasources: {
          ...state.datasources,
          [state.selectedTable]: {
            ...state.datasources[state.selectedTable],
            meta: {
              ...state.datasources[state.selectedTable].meta,
              query: actions.payload,
            },
          },
        },
      };
    }

    case LOAD_META_DATA: {
      const { metaData, selectedTable } = actions.payload;

      return {
        ...state,
        datasources: {
          ...state.datasources,
          [selectedTable]: {
            name: selectedTable,
            data: undefined as any,
            meta: metaData,
          },
        },
      };
    }

    case SELECT_TABLE: {
      return {
        ...state,
        selectedTable: actions.payload,
      };
    }

    default:
      return state;
  }
};
