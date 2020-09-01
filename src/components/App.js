import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import { connect } from 'react-redux'
import CommentList from 'components/CommentList'
import * as actions from 'actions'

// Component orders: App -> Route -> connect -> requireAuth -> CommentBox

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      )
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h4>Comment App to be used for testing!</h4>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App)
