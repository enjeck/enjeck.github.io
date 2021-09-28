import React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
  render() {
    return (
      <div >
        <footer>
          © {new Date().getFullYear()} Enjeck Cleopatra
        </footer>
      </div>
    )
  }
}

export default Footer
