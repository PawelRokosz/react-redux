import React, { PropTypes } from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {

  static propTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.props.dashboardVisitIncrement()
  }

  render () {
    const { dashboard } = this.props
    return (
      <Dashboard
        visitsCount={dashboard.visitsCount}
        dashboardItems={dashboard.dashboardItems} />
    )
  }
}

export default DashboardRoute
