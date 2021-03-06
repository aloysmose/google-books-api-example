import { ActionTypes, Action } from '../actions/books';
import Book from 'types/Book';

/*
 * Book state interface
 */
export interface State {
    isFetching: boolean;
    hasData: boolean;
    data: Book[];
    query: string;
}

/*
 * Initial empty state
 */
export const initialState: State = {
    hasData: false,
    data: [],
    isFetching: false,
    query: '',
};

/*
 * Book state update
 */
export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionTypes.FETCHING: {
            return {
                hasData: false,
                data: [],
                isFetching: true,
                query: action.payload.query,
            };
        }
        case ActionTypes.FETCHED: {
            return {
                ...state,
                data: action.payload.data,
                isFetching: false,
                hasData: action.payload.data.length > 0,
            };
        }
        default:
            return state;
    }
};
