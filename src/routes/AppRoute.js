import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, IndexRoute } from 'react-router';
import DynamicImport from '../common/LazyLoadComponent'
import App from '../App'

const history = createBrowserHistory();

const LoaderComponent = () => {
    return (<div className="loading-container"><div className="pulse"></div></div>);
};

const LoanListLoader = (props) => {
    return (
        <DynamicImport load={() => import('../containers/loanContainer')}>
            {(Component) => Component == null
                ? <LoaderComponent />
                : <Component {...props} />}
        </DynamicImport>
    );
};

export default class AppRoute extends Component {
    render() {
        return (

           
            <Router history={history}>

                <Route path="/" component={App}>
                    {/* <IndexRoute component={() => <App />} /> */}
                    <Route path='/loan-list' component={() => <LoanListLoader />} />
                    
                    {/* <Route path="*" component={() => <NotfoundPageLoader />} /> */}
                </Route>
            </Router>
          

        );
    }
}