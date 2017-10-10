import React from 'react'
import './Dashboard.scss'
import ListJSX from './ListJSX'

export const Dashboard = ({ visitsCount, dashboardItems }) => (
  <div>
    <h2 className='dashboardContainer'>
      Dashboard visits:
      {' '}
      <span className='dashboard--green'>
        {visitsCount}
      </span>
    </h2>
    <ListJSX dashboardItems={dashboardItems} />
  </div>
)

Dashboard.propTypes = {
  dashboardItems : React.PropTypes.array.isRequired,
  visitsCount: React.PropTypes.number.isRequired
}

export default Dashboard
