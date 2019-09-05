import React, { Component } from 'react';
import Loader from 'react-loader';

export default class DynamicImport extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            component: null,
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    componentWillMount() {
        this.props.load()
            .then((component) => {
                this.setState(() => ({
                    component: component.default ? component.default : component
                }));
            });
    }

    render() {
        return (
            <Loader loaded={this.state.loaded} lines={13} length={20} width={10} radius={30}
                corners={1} rotate={0} direction={1} color="#000" speed={1}
                trail={60} shadow={false} hwaccel={false} className="spinner"
                zIndex={2e9} top="50%" left="50%" scale={1.00}
                loadedClassName="loadedContent">
                {this.props.children(this.state.component)}
            </Loader>
        )
    }
}