import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import imgPhoto from '../../../assets/image/png/jaime_small.png'

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  LinkContact,
} from '../../../components/Core'

const CaseStudy1Body = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
                <Title variant="secSm">
                    01 Research
                </Title>
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                      here is a bunch of info.
                  </Text>
            </Box>
            <Box>
            <img src={imgPhoto} alt="folio" className="img-fluid" />
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
                <h2 variant="secSm">
                    Survey
                </h2>
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                      here is a bunch of info.
                  </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
                <h3 variant="secSm">
                    Another smaller heading
                </h3>
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                      more information.
                  </Text>
            </Box>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseStudy1Body
