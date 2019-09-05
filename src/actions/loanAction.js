import { doActionGet } from '../services/httpRequest';

export const FETCH_LOANS = 'FETCH_LOANS';
export const FETCH_LOANS_SUCCESS = "FETCH_LOANS_SUCCESS";
export const FETCH_LOANS_FAILURE = "FETCH_LOANS_FAILURE";

export const getLoanList = () => {
    const request = doActionGet({ url: 'loans.json' });
    console.log("inside actions", request);
    return {
        type: FETCH_LOANS,
        payload: request
    };
}

export const getLoanListSuccess = (loanList) => {
    return {
        type: FETCH_LOANS_SUCCESS,
        payload: loanList
    };
}

export const getLoanListFailure = (error) => {
    return {
        type: FETCH_LOANS_FAILURE,
        payload: error
    };
}