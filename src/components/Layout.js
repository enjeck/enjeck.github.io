import React from 'react'
import Footer from '../components/footer'
import ToggleMenu from '../components/ToggleMenu'

class Layout extends React.Component {
  render() {
    const {children } = this.props

    return (
      <div
      className="layout-container"
      >
        < ToggleMenu />
        <main>
        {children}
        </main>
      < Footer />
      </div>
    )
  }
}

export default Layout
