import React, { Component, Fragment } from 'react'
import { GlobalConsumer } from '../../Context/Context'

class Counter extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <a className="btn btn-primary text-left mr-3" onClick={() => {this.props.dispatch({type: 'MINUS_ORDER'})}}>-</a>

                <input type="text" className="text-center" value={this.props.state.totalOrder} />
                
                <a className="btn btn-primary text-left ml-3" onClick={() => {this.props.dispatch({type: 'PLUS_ORDER'})}}>+</a>
            </Fragment>
        )
    }
}

export default GlobalConsumer(Counter)
