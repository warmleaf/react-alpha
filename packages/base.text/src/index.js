import { string } from 'prop-types'
import styled from 'styled-components'

function pickBreakType(type) {
  switch (type) {
    case 'breakAll':
      return 'break-all'
    case 'breakWord':
      return 'break-word'
    case 'noBreak':
    default:
      return 'keep-all'
  }
}

const Text = styled.span`
  align-self: ${props => props.as || null};
  background: ${props => props.bg || null};
  background-color: ${props => props.bgc || null};
  border: ${props => props.b || null};
  border-bottom: ${props => props.bb || null};
  border-left: ${props => props.bl || null};
  border-radius: ${props => props.round || null};
  border-right: ${props => props.br || null};
  border-top: ${props => props.bt || null};
  text-shadow: ${props => props.shadow || null};
  box-sizing: border-box;
  color: ${props => props.c || null};
  cursor: ${props => props.cur || null};
  margin: ${props => props.m || null};
  margin-bottom: ${props => props.mb || null};
  margin-left: ${props => props.ml || null};
  margin-right: ${props => props.mr || null};
  margin-top: ${props => props.mt || null};
  font-size: ${props => props.size || null};
  padding: ${props => props.p || null};
  padding-bottom: ${props => props.pb || null};
  padding-left: ${props => props.pl || null};
  padding-right: ${props => props.pr || null};
  padding-top: ${props => props.pt || null};
  opacity: ${props => props.o || null};
  text-align: ${props => props.ta || null};
  transform: ${props => props.t || null};
  transition: ${props => props.ani || null};
  width: ${props => props.w || null};
  word-break: ${props => props.break ? pickBreakType(props.break) : null};
`

Text.propTypes = {
  /* align-self */
  as: string,
  b: string,
  /* border-bottom */
  bb: string,
  /* border-left */
  bl: string,
  /* border-radius */
  br: string,
  /* background */
  bg: string,
  /* background-color */
  bgc: string,
  /* border-top */
  bt: string,
  /* inline Text */
  inline: string,
  /* vertical center(default) */
  vc: string,
  /* horizontal center(default) */
  hc: string,
  round: string
}

export default Text
