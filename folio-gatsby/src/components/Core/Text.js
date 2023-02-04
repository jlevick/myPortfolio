import React from 'react'
import styled from 'styled-components'
import { color, space, typography, shadow } from 'styled-system'

const Paragraph = styled.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 1.0625rem;
  letter-spacing: -0.2px;
  line-height: 1.71;

  ${color};
  ${space};
  ${typography};
  ${shadow};
`

const ListItem = styled.li`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 1.0625rem;
  letter-spacing: -0.2px;
  line-height: 1.71;
  list-style-type: disc;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`

const ParagraphLg = styled(Paragraph)`
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.66px;
  line-height: 38px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`

const ParagraphSmall = styled(Paragraph)`
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`
const ParagraphBold = styled(Paragraph)`
  font-size: 16px;
  letter-spacing: -0.5px;
  font-weight: bold;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`

const ParagraphTag = styled(Paragraph)`
  font-size: 0.8125rem;
  line-height: 1.63;
  letter-spacing: 1.63px;
  font-weight: 700;
  text-transform: uppercase;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`

const Text = ({ variant = 'lg', ...props }) => {
  let TextRender

  switch (variant) {
    case 'lg':
      TextRender = ParagraphLg
      break
    case 'bold':
      TextRender = ParagraphBold
      break
    case 'small':
      TextRender = ParagraphSmall
      break
    case 'tag':
      TextRender = ParagraphTag
      break
    case 'p':
      TextRender = Paragraph
      break
    case 'li':
      TextRender = ListItem
      break
    default:
      TextRender = ParagraphLg
  }

  return <TextRender color="text" {...props} />
}

export default Text
