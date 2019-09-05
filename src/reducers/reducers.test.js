import reducer from './loanReducer';
import * as actions from '../actions/loanAction';
import expect from 'expect';
// import getPostMock from '../mocks/getPostMock';


describe('post reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({loans: { loanList: [], totalCount:0, error: null, loading: false }});
    });

    it('should handle FETCH_LOANS', () => {
        const startAction = {
          type: actions.FETCH_LOANS
        };
        expect(reducer({}, startAction)).toEqual({loans: { loanList: [], totalCount:0, error: null, loading: true }});
      });

      xit('should handle FETCH_LOANS_SUCCESS', () => {
          let data = {
              "totalCount": 2,
              "list": [
                {
                  "loanNumber": 19047528,
                  "borrowerName": "Toto, Jojn"
                }
            ] 
    }
    let payload;
        const successAction = {
          type: actions.FETCH_LOANS_SUCCESS,
          paylaod: {"list":{"list":[{"id":123,"name":'abc'}]}},
        };
        console.log("------",successAction)
        expect(reducer({}, successAction)).toEqual({
            type:'FETCH_LOANS_SUCCESS'
        });
      });

      it('should handle FETCH_LOANS_FAILURE', () => {
          let payload;
        const failAction = {
          type: actions.FETCH_LOANS_FAILURE,
          payload: {"message" : "some error"},
        };
        expect(reducer({}, failAction)).toEqual({loans: { loanList: [], totalCount:0 ,error: null, loading: false }});
      });
})