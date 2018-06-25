import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actions'
import Form from '../components/Login'

class LoginContainer extends React.Component {
  onSubmit = data => {
    this.props.actions.sendLoginRequest(data)
  }

  render () {
    const props = {
      onSubmit: this.onSubmit
    }
    return <Form {...props} />
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(LoginContainer)
