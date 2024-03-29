import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Masonry from 'react-masonry-component'

import { Title, Section, Box, Text } from '../../components/Core'
import RotateImg from '../../components/RotateImg'
import devWorks2 from '../../data/devWorks2'
import { useWindowSize } from '../../hooks'
import { breakpoints } from '../../utils'

const WorkCard = styled(Box)``
const WorkText = styled(Box)``

const Grid = props => {
  const size = useWindowSize()

  const masonryOptions = {
    transitionDuration: 1000,
  }

  return size.width < breakpoints.lg ? (
    <Masonry
      options={masonryOptions}
      className={'masonry-grid row'}
      {...props}
    />
  ) : (
    <Row {...props} />
  )
}

const Works = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(devWorks2)
  }, [])

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Title variant="cardBig" className=" text-center mb-5 mt-4">Want to see more?</Title>
          <Grid>
            {items.map((item, index) => (
              <Col
                lg={item.halfWidth ? 6 : 4}
                md="6"
                sm="6"
                key={index}
                className="filtr-item"
              >
                <WorkCard className="position-relative" mb="30px">
                  <RotateImg link={item.link} imgSrc={item.thumbnail} />
                  <Box pt="2.125rem">
                    <WorkText className="overflow-hidden text-center">
                      <Text variant="tag" mb="0.5rem">
                        {item.categories[0]}
                      </Text>
                      <Title variant="cardLg">
                        <Link to={item.link}>{item.brand} </Link>
                      </Title>
                    </WorkText>
                  </Box>
                </WorkCard>
              </Col>
            ))}
          </Grid>
          <Box pt="3rem" className="text-center">
          </Box>
        </Container>
      </Section>
    </>
  )
}

export default Works
