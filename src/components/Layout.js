import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import ToggleMenu from '../components/ToggleMenu'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
      className="layout-container"
      /*
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        */
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
