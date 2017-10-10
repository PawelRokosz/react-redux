import React, { PropTypes } from 'react'

const ListJSX = ({ dashboardItems }) => {
  const items = dashboardItems.map((item, i) => (
    <h4 key={i}>{item.label}</h4>
  ))

  return (
    <div>
      { items }
    </div>
  )
}

ListJSX.propTypes = {
  dashboardItems: PropTypes.array.isRequired
}

export default ListJSX
