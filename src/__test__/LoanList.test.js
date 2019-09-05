
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import LoanList from '../components/loan-list/LoanList';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import  {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

configure({adapter : new Adapter()});


describe("LoanList page ", () => {
  let wrapper, loans;

  beforeEach(() => {
   let props = {
      loans: {
        "totalCount": 2,
        "loanList": [
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
        ]
      }
    }
  })

  // it('shows LoanListChild', () => {
  //   const store = mockStore();
  //   const loanListComponent = shallow(<LoanList store={store} />);
  //   LoanListChild = loanListComponent.dive().find(LoanListChild);
  //   expect(loanListComponent).to.exist
  // })

  xit('ComponentDidMount', () => {
    wrapper = shallow(<LoanList {...props} />)     
    expect(loans.loanList.length).toEqual(1)
  })
  xit('renders without crashing', () => {
    let tree;
    tree = shallow(<LoanList />);
    let div = tree.find('#loan');
    let table = tree.find('Table');

    expect(tree).toBeDefined();
    expect(div).toBeDefined();
  });

  xit('should render correctly with no props', () => {
    const component = mount(<LoanList />);
    expect(component).toMatchInlineSnapshot();

    // let data = '<div'
    // +'id="loanlist"'
    // +'>'
    // +'<LoanListChild />'
    // +'</div>';
    // expect(component).toEqual(data);

    // const tree = renderer.create(<LoanList/>).toJSON();
    // expect(tree).toMatchSnapshot();
  });

  xit('should render banner text correctly with given props', () => {
    let loans = {
      "totalCount": 2,
      "loanList": [
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
      ]
    }
    const component = shallow(<LoanList list={loans} />);

    expect(component).toMatchSnapshot();
  });

  xit('should render child component ', () => {
    let loans = {
      "totalCount": 2,
      "loanList": [
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
      ]
    }
    const component = shallow(<LoanList list={loans} />);
    let div = component.find('#loanlis');
    expect(div).toBeDefined();
    // expect(component).toMatchSnapshot();
  });
})