// naming convention: export default a FUNCTION
// not capitalised first character!!

// THIS FILE STORE HIGHER ORDER COMPONENT (HOC)

// connect from redux is one of the higher order components

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      // Passing props
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
