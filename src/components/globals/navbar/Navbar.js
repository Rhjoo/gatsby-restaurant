import React from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeader />
        <NavbarLinks />
        <NavbarIcons />
      </div>
    )
  }
}

export default Navbar