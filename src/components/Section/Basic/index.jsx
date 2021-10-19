import React from 'react'
import PropTypes from 'prop-types'

function BasicSection({ children }) {
  return (
    <div className="max-w-7xl m-auto py-3 px-5 sm:py-5 sm:px-7">
      {children}
    </div>
  )
}

BasicSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BasicSection
