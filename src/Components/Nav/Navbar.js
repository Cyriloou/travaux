import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'

function Navbar(props) {
  return (
    <Nav className='justify-content-center' defaultActiveKey='/' as='ul'>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-0' href='/home'>
          new
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-1' href='/logout'>
          past
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-2' href='/logout'>
          comments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-3' href='/logout'>
          ask
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-4' href='/logout'>
          show
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-5' href='/logout'>
          submit
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

Navbar.propTypes = {}

export default Navbar
