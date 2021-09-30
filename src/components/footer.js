import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div >
        <footer>
          <span>
          <div className="copyright"><span>©</span> {new Date().getFullYear()} Enjeck Cleopatra. All Rights Reserved.</div>
        </span>
        </footer>

      </div>
    )
  }
}

export default Footer
