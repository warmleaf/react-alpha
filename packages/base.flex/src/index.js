import PropTypes from 'prop-types'
import styled from 'styled-components'

const Flex = styled.div`
  align-items: ${props =>
    (props.column
      ? props.vc ? (props.vc === true ? 'center' : props.vc) : null
      : props.hc ? (props.hc === true ? 'center' : props.hc) : null)};
  align-self: ${props => props.as || null};
  background: ${props => props.bg || null};
  background-color: ${props => props.bgc || null};
  border: ${props => props.b || null};
  border-bottom: ${props => props.bb || null};
  border-left: ${props => props.bl || null};
  border-radius: ${props => props.round || null};
  border-right: ${props => props.br || null};
  border-top: ${props => props.bt || null};
  bottom: ${props => props.bm || null};
  box-shadow: ${props => props.shadow || null};
  box-sizing: border-box;
  color: ${props => props.c || null};
  cursor: ${props => props.cur || null};
  display: ${props => (props.hidden ? 'none' : props.inline ? 'inline-flex' : 'flex')};
  height: ${props => props.h || null};
  justify-content: ${props =>
    (!props.column
      ? props.vc ? (props.vc === true ? 'center' : props.vc) : null
      : props.hc ? (props.hc === true ? 'center' : props.hc) : null)};
  left: ${props => props.lt || null};
  margin: ${props => props.m || null};
  margin-bottom: ${props => props.mb || null};
  margin-left: ${props => props.ml || null};
  margin-right: ${props => props.mr || null};
  margin-top: ${props => props.mt || null};
  max-height: ${props => props.mah || null};
  max-width: ${props => props.maw || null};
  min-height: ${props => props.mih || null};
  min-width: ${props => props.miw || null};
  flex: ${props => (props.full ? 1 : null)};
  flex-direction: ${props => (props.column ? 'column' : null)};
  flex-wrap: ${props => (props.wrap ? 'wrap' : null)};
  font-size: ${props => props.size || null};
  padding: ${props => props.p || null};
  padding-bottom: ${props => props.pb || null};
  padding-left: ${props => props.pl || null};
  padding-right: ${props => props.pr || null};
  padding-top: ${props => props.pt || null};
  position: ${props => (props.absolute ? 'absolute' : props.relative ? 'relative' : null)};
  opacity: ${props => props.o || null};
  overflow: ${props => (props.nonOverflow ? 'hidden' : props.scroll ? 'scroll' : 'auto')};
  right: ${props => props.rt || null};
  top: ${props => props.tp || null};
  text-align: ${props => props.tps || null};
  transform: ${props => props.t || null};
  transition: ${props => props.ani || null};
  width: ${props => props.w || null};
  z-index: ${props => props.z || null};
  -webkit-overflow-scrolling: ${props => props.rebound || null};
`

Flex.propTypes = {
  /* align-self */
  as: PropTypes.string,
  b: PropTypes.string,
  /* border-bottom */
  bb: PropTypes.string,
  /* border-left */
  bl: PropTypes.string,
  /* border-radius */
  br: PropTypes.string,
  /* background */
  bg: PropTypes.string,
  /* background-color */
  bgc: PropTypes.string,
  /* border-top */
  bt: PropTypes.string,
  /* inline flex */
  inline: PropTypes.string,
  /* vertical center(default) */
  vc: PropTypes.string,
  /* horizontal center(default) */
  hc: PropTypes.string,
  round: PropTypes.string
}

export default Flex
