import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{backgroundColor: '#000000', fontFamily: 'fantasy'}}>
        <div className="container-fluid" style={{margin: '0px 0px'}}>
            <a href="/"className="navbar-brand">Expense-Tracker | Rich By Savings</a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </nav>
    </div>
  )
}
