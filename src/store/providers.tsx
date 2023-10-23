import { createContext, Dispatch, useReducer } from "react";
import { intialState } from ".";
import { ActionProps, dataReducer } from "./reducer";

export const DataContext = createContext(intialState);
export const DataDispatchContext = createContext<Dispatch<ActionProps>>(
  () => undefined
);

export const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(dataReducer, intialState);

  return (
    <DataContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};
