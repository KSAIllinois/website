import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/Main'

function Page({ children, styleClass }) {
  return (
    <div className="w-screen min-h-screen bg-gray-100 overflow-x-hidden">
      <Header />
      <div className={styleClass}>
        {children}
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  styleClass: PropTypes.string,
}

Page.defaultProps = {
  styleClass: '',
}

export default Page
