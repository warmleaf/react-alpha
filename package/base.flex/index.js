import { string } from 'prop-types'
import styled, { StyledFunction } from 'styled-components'

const Flex = styled.div`
  display: ${props => props.inline ? 'inline-flex' : 'flex'}
`

Flex.propTypes = {
  inline: string
}

export default Flex
