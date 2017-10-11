import React, { PropTypes } from 'react'
import './Dashboard.scss'

const ListJSX = ({ dashboardItems, onClick, activeIndex, onDragOver, onDragStart, onDrop }) => {
  const items = dashboardItems.map((item, i) => {
    const itemJSX = activeIndex === i
      ? <p><b><u>{item.label}</u></b></p>
      : <p>{item.label}</p>

    return (
      <h4
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        draggable='true'
        id={i}
        key={i}
        onClick={onClick(i)}
        className='dashboard-list-item'>{itemJSX}</h4>
    )
  })

  return (
    <div>
      { items }
    </div>
  )
}

ListJSX.propTypes = {
  dashboardItems: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  activeIndex: PropTypes.number
}

export default ListJSX
