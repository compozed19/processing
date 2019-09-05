import actions from './loanAction';
import { apiMiddleware, ApiError } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import reducers from '../reducers/loanReducer';



const createStore = configureMockStore([apiMiddleware])
const store = createStore(reducers.initialState)

describe("loanList Loaders",() =>{
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
    let data = {
        "totalCount": 2,
        "list": [
          {
            "loanNumber": 19047528,
            "borrowerName": "Toto, Jojn",
            "subjectPropertyAddress": [
              "1700 Knoll Trail Dr, Dallas TX 75248"
            ],
            "currentMilestone": "Sent to Processing",
            "propertyType": "Res Owner Occupied",
            "loanAmount": 50058.12,
            "newMoney": 1058.21,
            "underwritingConditions": "Mortgage Statement",
            "loanOfficer": "Bobby Finken",
            "leadSource": "Internet",
            "fileStartDate": "09/04/2019",
            "processingActionItems": "",
            "taxRequestDate": "09/04/2019",
            "fileClosingDate": "09/04/2019",
            "lienHolder": "",
            "numberOfLienHolders": 0,
            "phoneNumber": "78412699",
            "email": "Toto@cazcreek.com",
            "transferee": "toto",
            "interestRate": 7.5,
            "numberOfSubjectProperties": 1
          },
          {
            "loanNumber": 19047522,
            "borrowerName": "Jojn",
            "subjectPropertyAddress": [
              "1700 Knoll Trail Dr, Dallas TX 75248",
              "2800 Trail Dr, Dallas TX 874563"
            ],
            "currentMilestone": "Sent to Processing",
            "propertyType": "Res Owner Occupied",
            "loanAmount": 50058.12,
            "newMoney": 1058.21,
            "underwritingConditions": "Mortgage Statement",
            "loanOfficer": "Bobby Finken",
            "leadSource": "Internet",
            "fileStartDate": "09/04/2019",
            "processingActionItems": "",
            "taxRequestDate": "09/04/2019",
            "fileClosingDate": "09/04/2019",
            "lienHolder": "",
            "numberOfLienHolders": 0,
            "phoneNumber": "78412699",
            "email": "Toto@cazcreek.com",
            "transferee": "toto",
            "interestRate": 7.5,
            "numberOfSubjectProperties": 1
          }
        ]
      }
    test.skip("data requested",() =>{
        const expectedActions = [
            { type:'FETCH_LOANS', payload: undefined},
            { type:'FETCH_LOANS_SUCCESS', payload: { data}}
           ]
           store.dispatch(actions.getLoanList())
           .then(() => {
               expect(store.getLoanList).toEqual(expectedActions)
           })
    })
})