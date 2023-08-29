import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode==='dark'?'black':'#88d7fe', height: '70px' }}>
        <div className="container-fluid">
          <a className="navbar-brand mx-2" style={{color: props.mode==='dark'?'white':'black', fontSize:"25px"}} href="#">{props.title}</a>
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{fontSize:"20px"}}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
            </div>
          </div>
      </nav>
    </>
  )
}
Navbar.propTypes = { title: PropTypes.string, About: PropTypes.string, Home: PropTypes.string }
Navbar.defaultProps = {
  title: 'Set title here',
  About: 'About text here',
  Home: 'home page here'
};