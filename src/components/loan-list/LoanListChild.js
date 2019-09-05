import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './loan-list.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import LocationIcon from '../../assets/Group5496.svg';

const colArr = ['Loan','Borrower Name','Status','Subject Property' ,'Property Type','Loan Amount','New $','Underwriting Conditions',
'Loan Officer' , 'Lead Source' , 'Interest Rate' , 'Current Milestone' ,'Date File Start', 'Processing action items' ,'Tax request date' ,
'Closing Date', 'Lien Holder' ,'Number of Lien holders' ,'Phone number' ,'Email' ,'Transferee' ,'Number of subject properties'];

const LoanListChild = props => {
    const renderTableData = loanObj => {
        const data = (loanObj.loanList.map(row => (
           <TableRow key={row.loanNumber}>
               <TableCell component="th" scope="row" align="left">
                   <Link to={''}>{row.loanNumber} </Link>
               </TableCell>
               <TableCell align="left">{row.borrowerName}</TableCell>
               <TableCell align="left">
                   <span className='statusBtn closeBtn'>{row.currentMilestone}</span>
               </TableCell>
               <TableCell align="left">
                   <span className='hIcon'>
                       <img src={LocationIcon} alt="location" />
                       <span>{'+' + loanObj.totalCount}</span>
                   </span>
               </TableCell>
               <TableCell align="left">{row.propertyType}</TableCell>
               <TableCell align="left">{row.loanAmount}</TableCell>
               <TableCell align="left">{row.newMoney}</TableCell>
               <TableCell align="left">{row.underwritingConditions}</TableCell>
               <TableCell align="left">{row.loanOfficer}</TableCell>
               <TableCell align="left">{row.leadSource}</TableCell>
               <TableCell align="left">{row.interestRate + '%'}</TableCell>
               <TableCell align="left">{row.currentMilestone}</TableCell>
               <TableCell align="left">{row.fileStartDate}</TableCell>
               <TableCell align="left">{row.processingActionItems}</TableCell>
               <TableCell align="left">{row.taxRequestDate}</TableCell>
               <TableCell align="left">{row.fileClosingDate}</TableCell>
               <TableCell align="left">{row.lienHolder}</TableCell>
               <TableCell align="left">{row.numberOfLienHolders}</TableCell>
               <TableCell align="left">{row.phoneNumber}</TableCell>
               <TableCell align="left">{row.email}</TableCell>
               <TableCell align="left">{row.transferee}</TableCell>
               <TableCell align="left">{row.numberOfSubjectProperties}</TableCell>
           </TableRow>
       )));
       return data;
   }
  return (
       <div className='container-fluid'>
            <br /><br /><br />
            <Paper className='alineaTable'>
                <Table id="table">
                    <TableHead>
                        <TableRow id="TableRow">
                            { colArr.map((elm ,idx) =>{
                               return <TableCell key={idx} align="left">{elm}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody id="tableBody">
                        {props.loanList && props.loanList.length > 0 ? renderTableData(props) :null}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
export default LoanListChild;
