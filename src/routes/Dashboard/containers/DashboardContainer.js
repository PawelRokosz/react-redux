import { connect } from 'react-redux'
import {
  dashboardAddItem,
  dashboardEditItem,
  dashboardVisitIncrement,
  dashboardReorderItems
} from '../modules/dashboard'
/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the dashboard:   */

import DashboardRoute from '../components/Dashboard'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  dashboardVisitIncrement: () => dashboardVisitIncrement(1),
  dashboardAddItem,
  dashboardEditItem,
  dashboardReorderItems
}

const mapStateToProps = (state) => ({
  dashboard : state.dashboard,
  session: state.session
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const dashboard = (state) => state.dashboard
    const tripleCount = createSelector(dashboard, (count) => count * 3)
    const mapStateToProps = (state) => ({
      dashboard: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoute)
