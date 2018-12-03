import { Action } from '@ngrx/store';

export interface IAppState {
    company: string;
    confirmation: string;
    email: string;
    name: string;
    password: string;
    surname: string;
    tos: boolean;
}

export interface IPasswordAction extends Action {
    payload: {
        name: string;
        value: string;
    };
}

export const initialState = {
    company: '',
    confirmation: '',
    email: '',
    name: '',
    password: '',
    surname: '',
    tos: false
};

export const UPDATE = 'UPDATE';
export const RESET = 'RESET';

export function reducer(state: IAppState = initialState, action: IPasswordAction) {
    switch (action.type) {
        case UPDATE: return { ...state, ...action.payload };

        case RESET: return initialState;

        default: return state;
    }
}
