import React, { ReactNode, createContext, useReducer, useContext } from 'react';

type Action = {type: string};
type State = {time: number};
type Dispatch = (action: Action) => void;
type SettingsProviderProps = {children: ReactNode};

const initialState: State = {
    time: 300
}

function settingsReducer(state: State, action: Action): State {
    return state;
}

const SettingsStateContext = createContext<State>(initialState);
const SettingsDispatchContext = createContext<Dispatch|undefined>(undefined);

function SettingsProvider({children}: SettingsProviderProps) {
    const [state, dispatch] = useReducer(settingsReducer, initialState);

    return (
        <SettingsStateContext.Provider value={state}>
            <SettingsDispatchContext.Provider value={dispatch}>
                {children}
            </SettingsDispatchContext.Provider>
        </SettingsStateContext.Provider>
    );
}

function useSettingsState(): State {
    const context = useContext(SettingsStateContext);

    return context;
}

function useSettingsDispatch(): Dispatch|undefined {
    const context = useContext(SettingsDispatchContext);

    return context;
}

export {SettingsProvider, useSettingsState, useSettingsDispatch};
