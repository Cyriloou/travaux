import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'

function Navbar(props) {
  return (
    <Nav className='justify-content-center' defaultActiveKey='/' as='ul'>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-0' href='/newstories'>
          new
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-1' href='/topstories'>
          past
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-2' href='/askstories'>
          comments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-3' href='/askstories'>
          ask
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-4' href='/'>
          show
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link eventKey='link-5' href='/'>
          submit
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

Navbar.propTypes = {}

export default Navbar
