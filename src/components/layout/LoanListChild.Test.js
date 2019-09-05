import React from 'react';
import Enzyme from 'enzyme';
import LoanListChild from '../components/loan-list/LoanListChild';
import { shallow, mount } from 'enzyme';


import  {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

configure({adapter : new Adapter()});
let props ={
    "totalCount" : 1,
    list : [
        {
            "id"  :123,
            "name" : "ABC"
        }
    ]
}
const colArr = ['Loan','Borrower Name','Status','Subject Property' ,'Property Type','Loan Amount','New $','Underwriting Conditions',
'Loan Officer' , 'Lead Source' , 'Interest Rate' , 'Current Milestone' ,'Date File Start', 'Processing action items' ,'Tax request date' ,
'Closing Date', 'Lien Holder' ,'Number of Lien holders' ,'Phone number' ,'Email' ,'Transferee' ,'Number of subject properties'];

describe("LoanList page ", () => {
    xit("LoanListChild", () => {
        let tree = shallow(<LoanListChild loans={props}/>);
        let div = tree.find('.container-fluid');
        let table= tree.find('#table');
        let TableRow = tree.find("#TableRow");
       
        expect(div).toBeDefined();
        expect(table).toBeDefined();
        expect(TableRow).toBeDefined();
        expect(table).toHaveLength(1);
    })

    xit("should display table header",() =>{
        let tree = shallow(<LoanListChild loans={props}/>);
        let TableRow = tree.find('#TableRow');


        const tbody = table.find('#tableBody');
        expect(tbody).toHaveLength(1);

        const rows = tbody.find('#');

   rows.forEach((tr, rowIndex) => {
    const cells = tr.find('td');
    expect(cells).toHaveLength(cols.length);
    expect(cells.at(0).text()).toEqual(data[rowIndex].id);
    expect(cells.at(1).text()).toEqual(data[rowIndex].name);
    expect(cells.at(2).text()).toEqual(data[rowIndex].email);
 });
       expect(rows).toHaveLength(data.length);
        expect(TableRow).toHaveLength(cols.length);
        expect(TableCell).toBeDefined();


        
        
    

    })
});