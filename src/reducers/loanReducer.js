import { FETCH_LOANS, FETCH_LOANS_SUCCESS, FETCH_LOANS_FAILURE } from '../actions/loanAction';

const INITIAL_STATE = {
    loans: { loanList: [], error: null, loading: false,totalCount:0 }
}

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case FETCH_LOANS:
            return { ...state, loans: { loanList: [], totalCount:0, error: null, loading: true } };
        case FETCH_LOANS_SUCCESS:
            return { ...state, loans: { loanList: action.payload.list,totalCount:action.payload.totalCount , error: null, loading: false } }
        case FETCH_LOANS_FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, loans: { loanList: [], totalCount:0 ,error: null, loading: false } };
        default:
            return state;
    }
}