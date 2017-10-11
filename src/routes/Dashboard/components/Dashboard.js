import React, { PropTypes } from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {

  static propTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboardAddItem: PropTypes.func.isRequired,
    dashboardEditItem: PropTypes.func.isRequired,
    dashboardReorderItems: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.props.dashboardVisitIncrement()
  }

  updateItem = ({ editItemIndex, label }) => (
    editItemIndex === null
    ? this.props.dashboardAddItem({ label })
    : this.props.dashboardEditItem({ editItemIndex, label })
  )

  reorderItem = ({ start, end }) => {
    end = parseInt(end)
    start = parseInt(start)

    const reorderIsCorrect = !isNaN(start) && !isNaN(end) && start !== end
    if (reorderIsCorrect) {
      this.props.dashboardReorderItems({ start, end })
    }
  }

  render () {
    if (!this.props.session.isLoggedIn) {
      return <h4>Please login in order to access your dashboard</h4>
    }

    const { dashboard } = this.props
    return (
      <Dashboard
        reorderItem={this.reorderItem}
        visitsCount={dashboard.visitsCount}
        dashboardItems={dashboard.dashboardItems}
        updateItem={this.updateItem} />
    )
  }
}

export default DashboardRoute
