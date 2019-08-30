import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Card from './Component/Card/Card'
import Lifecycle from './Component/Lifecycle/Lifecycle'
import GlobalProvider from './Context/Context'
import Product from './Component/Product/Product'
import Blog from './Component/Blog/Blog'
import DetailPost from './Component/Blog/DetailPost/DetailPost'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav className="nav justify-content-center nav-pills bg-primary py-2">
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/">BlogPost</Link>
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/product">Product</Link>
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/lifecycle">Lifecycle</Link>
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/card">Card</Link>
          </nav>

          <Route path="/" exact component={Blog} />
          <Route path="/detail-post/:postID" exact component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={Lifecycle} />
          <Route path="/card" component={Card} />
        </Fragment>
      </Router>
    )
  }
}

export default GlobalProvider(App)
