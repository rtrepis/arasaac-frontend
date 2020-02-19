/**
*
* H1
*
*/

import { darkWhite } from 'material-ui/styles/colors'

import styled from 'styled-components'
import { typography } from 'material-ui/styles'
import media from 'utils/mediaqueries'

const H1 = styled.h1`
  color: ${darkWhite};
  background-color: darkGreen;
  font-size: 4em;
  margin-bottom: 0.25em;
  margin-top: 0.25rem;
  font-weight: ${typography.fontWeightLight};
  display: inline-block;
  opacity: 80%;
  ${media.lg} {
    font-size: 4em;
  }
  
`

export default H1
