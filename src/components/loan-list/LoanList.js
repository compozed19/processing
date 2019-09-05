import React, { Component } from 'react'
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
import LoanListChild from '../loan-list/LoanListChild';

class LoanList extends Component {
    constructor(props) {
       super(props)
    }
    // componentDidMount() {

    //   const data = this.props.getLoanList();
    //   return data;
    // }
    
    render() {
        const { loans } = this.props;
        return <div id="loanlist"><LoanListChild { ...loans } /></div> 
    }
}

export default LoanList;
