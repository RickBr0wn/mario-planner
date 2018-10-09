import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav className="nav nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Mario Planner</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(Navbar)