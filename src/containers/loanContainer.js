import { connect } from 'react-redux';
import LoanList from '../components/loan-list/LoanList'
import { getLoanList, getLoanListSuccess, getLoanListFailure } from '../actions/loanAction'

const mapStateToProps = (state) => {
    return {
        loans: state.loans.loans
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLoanList: () => {
            return new Promise((resolve, reject) => {
                try {
                    dispatch(getLoanList()).then((response) => {
                        console.log('container ', response );
                        dispatch(getLoanListSuccess(response.payload.data));
                        resolve(response.payload.data);
                    })
                        .catch((error) => {
                            dispatch(getLoanListFailure(error));
                        });
                } catch (error) {
                    reject(error);
                }
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanList);