import React, { useState, useEffect } from 'react'
import { Container, Col } from 'react-bootstrap'
import Masonry from 'react-masonry-component'

import { Section, Box, ListNav } from '../../components/Core'
import WorkCard from '../../components/WorkCard'
import devWorks2 from '../../data/devWorks2'

const Works = () => {
  const [items, setItems] = useState([])
  const [activeLink, setActiveLink] = useState('*')

  useEffect(() => {
    setItems(devWorks2)
  }, [])

  const filterBy = cat => {
    if (cat === '*') {
      setActiveLink('*')
      setItems(devWorks2)
    } else {
      const filteredItems = devWorks2.filter(item => {
        return item.categories.indexOf(cat) !== -1
      })
      setActiveLink(cat)
      setItems(filteredItems)
    }
  }

  const masonryOptions = {
    transitionDuration: 1000,
  }

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav color="dark" className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === '*' ? 'active' : null
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    filterBy('*')
                  }}
                >
                  All works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === 'ux' ? 'active' : null
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    filterBy('ux')
                  }}
                >
                  UX Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === 'webdev' ? 'active' : null
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    filterBy('webdev')
                  }}
                >
                  Web Dev
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={'masonry-grid row'} // default ''
          >
            {items.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="20px" link={item.link} />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  )
}

export default Works
