'use client'

import Footer from './footer'
import ToggleMenu from './ToggleMenu'

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <ToggleMenu />
      <main>{children}</main>
      <Footer />
    </div>
  )
}