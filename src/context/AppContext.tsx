import React, { ReactNode, createContext, useReducer, useContext } from 'react';

type Action = {type: string};
type State = {time: number};
type Dispatch = (action: Action) => void;
type AppProviderProps = {children: ReactNode};

const initialState: State = {
    time: 600
}

function appReducer(state: State, action: Action): State {
    return state;
}

const AppStateContext = createContext<State>(initialState);
const AppDispatchContext = createContext<Dispatch|undefined>(undefined);

function AppProvider({children}: AppProviderProps) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
}

function useAppState(): State {
    const context = useContext(AppStateContext);

    return context;
}

function useAppDispatch(): Dispatch|undefined {
    const context = useContext(AppDispatchContext);

    return context;
}

export {AppProvider, useAppState, useAppDispatch};
