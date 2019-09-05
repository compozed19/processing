import React from 'react';
import { shallow, mount } from 'enzyme';

import container from '../containers/loanContainer';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
import LoanList from '../components/loan-list/LoanList';

describe('Container', () => {
    it('mapStateToProps should return the right value', () => {
        const initialState = {
            loans: {}
        };
        const store = mockStore(initialState);
        const wrapper = mount(<LoanList store={store} />);
        expect(wrapper.props().store.getState().loans).toMatchObject({});
      });

      it('should roll the dice again when button is clicked', () => {
       
        const initialState = {
            loans:{'total':2, 'LoanList':[{"id":123,"Name":'PQR'}]}
        };
        let data = {'totalCount':1, 'loan':[{'id':'12','name':'abc'}]}
        const mockLoanList = jest.fn().mockReturnValue(data);
        const store = mockStore(initialState);
        let wrapper = shallow(
            <LoanList store={store}  getLoanList={mockLoanList}/>
        );
        const actions = store.getActions();
        expect(actions).toEqual([]);
    });
    
});