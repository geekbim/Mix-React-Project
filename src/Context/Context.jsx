import React, { Component, createContext } from 'react'

// STORE
const RootContext = createContext()

// PROVIDER
const Provider = RootContext.Provider

const GlobalProvider = (Children) => {
    return (
        class ParentComponent extends Component {

            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
                switch (action.type) {
                    case 'PLUS_ORDER':
                        return (
                            this.setState({
                                totalOrder: this.state.totalOrder + 1
                            })
                        )
                    case 'MINUS_ORDER' :
                        if (this.state.totalOrder > 0) {
                            return (
                                this.setState({
                                    totalOrder: this.state.totalOrder - 1
                                })
                            )
                        } else {
                            return this.state.totalOrder
                        }
                    default:
                        return this.state.totalOrder
                }
            }

            render() {
                return (
                    <Provider value = {
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}


export default GlobalProvider


// CONSUMER
const Consumer = RootContext.Consumer

export const GlobalConsumer = (Children) => {
    return (
        class ParentComsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}