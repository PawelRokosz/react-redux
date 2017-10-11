import React, { Component, PropTypes } from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { loginAsync } from '../../modules/session'

const mapActionCreators = {
  loginAsync
}

const mapStateToProps = (state) => ({
  session: state.session
})

export class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    session: PropTypes.object.isRequired,
    loginAsync: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  handleLogin = (loginObj) => {
    this.props.loginAsync(loginObj, (path) => this.context.router.push(path))
  }

  render () {
    const { children } = this.props

    return (
      <div className='container text-center'>
        <Header
          handleLogin={this.handleLogin}
          session={this.props.session} />
        <div className='core-layout__viewport'>
          {children}
        </div>
      </div>
    )
  }
}

console.log('asdf')

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
