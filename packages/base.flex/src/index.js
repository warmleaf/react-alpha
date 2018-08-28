import { string, number, bool } from "prop-types";
import styled from "styled-components";

const Flex = styled.div`
  align-items: ${props =>
    props.column
      ? props.hc
        ? props.hc === true
          ? "center"
          : props.hc
        : null
      : props.vc
        ? props.vc === true
          ? "center"
          : props.vc
        : null};
  align-self: ${props => props.as};
  background: ${props => props.bg};
  background-color: ${props => props.bgc};
  background-image: ${props => props.bgi && "url(" + props.bgi + ")"};
  background-repeat: ${props => props.noRepeatBg && "no-repeat"};
  background-size: ${props => (props.bgi ? props.bgs || "100%" : props.bgs)};
  border: ${props => props.b};
  border-bottom: ${props => props.bb};
  border-color: ${props => props.bc};
  border-left: ${props => props.bl};
  border-radius: ${props => props.round};
  border-right: ${props => props.br};
  border-style: ${props => props.bs};
  border-top: ${props => props.bt};
  border-width: ${props => props.bw};
  bottom: ${props => props.bm};
  box-shadow: ${props => props.shadow};
  box-sizing: border-box;
  color: ${props => props.c};
  cursor: ${props => props.cur};
  display: ${props =>
    props.hidden ? "none" : props.inline ? "inline-flex" : "flex"};
  height: ${props => props.h};
  justify-content: ${props =>
    !props.column
      ? props.hc
        ? props.hc === true
          ? "center"
          : props.hc
        : null
      : props.vc
        ? props.vc === true
          ? "center"
          : props.vc
        : null};
  left: ${props => props.lt};
  margin: ${props => props.m};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-top: ${props => props.mt};
  max-height: ${props => props.mah};
  max-width: ${props => props.maw};
  min-height: ${props => props.mih};
  min-width: ${props => props.miw};
  flex: ${props =>
    props.full && (typeof props.full === "number" ? props.full : 1)};
  flex-direction: ${props => props.column && "column"};
  flex-wrap: ${props =>
    props.wrap && (typeof props.wrap === "string" ? props.wrap : "wrap")};
  font-size: ${props => props.size};
  padding: ${props => props.p};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  padding-top: ${props => props.pt};
  position: ${props =>
    props.absolute ? "absolute" : props.relative && "relative"};
  opacity: ${props => props.o};
  overflow: ${props =>
    props.nonOverflow ? "hidden" : props.scroll ? "scroll" : "auto"};
  right: ${props => props.rt};
  top: ${props => props.tp};
  text-align: ${props => props.tps};
  transform: ${props => props.t};
  transition: ${props => props.ani};
  width: ${props => props.w};
  z-index: ${props => props.z};
  -webkit-overflow-scrolling: ${props => props.rebound};
`;

Flex.propTypes = {
  /** position absolute */
  absolute: bool,
  /** transition */
  ani: string,
  /** align-self */
  as: string,
  /** border */
  b: string,
  /** border-bottom */
  bb: string,
  /** border-color */
  bc: string,
  /** background */
  bg: string,
  /** background-color */
  bgc: string,
  /** background-image */
  bgi: string,
  /** background-size */
  bgs: string,
  /** border-right */
  br: string,
  /** background-color */
  bgc: string,
  /** border-left */
  bl: string,
  /** bottom */
  bm: string,
  /** border-style */
  bs: string,
  /** border-top */
  bt: string,
  /** border-width */
  bw: string,
  /** color */
  c: string,
  /** flex direction */
  column: bool,
  /** cursor */
  cur: string,
  /** flex size */
  full: bool | number,
  /** height */
  h: string,
  /** display hidden */
  hidden: bool,
  /** left */
  lt: string,
  /** inline flex */
  inline: string,
  /** margin */
  m: string,
  /** margin-bottom */
  mb: string,
  /** margin-left */
  ml: string,
  /** margin-right */
  mr: string,
  /** margin-top */
  mt: string,
  /** max-height */
  mah: string,
  /** max-width */
  maw: string,
  /** min-height */
  mih: string,
  /** min-width */
  miw: string,
  /** overflow hidden */
  nonOverflow: bool,
  /** background no repeact */
  noRepeatBg: string,
  /** opacity */
  o: number,
  /** padding */
  p: string,
  /** padding-bottom */
  pb: string,
  /** padding-left */
  pl: string,
  /** padding-right */
  pr: string,
  /** padding-top */
  pt: string,
  /** vertical center */
  vc: string,
  /** horizontal center */
  hc: string,
  /** -webkit-overflow-scrolling */
  rebound: string,
  /** position relative */
  relative: bool,
  /** border-radius */
  round: string,
  /** right */
  rt: string,
  /** overflow scroll */
  scroll: bool,
  /** box-shadow */
  shadow: string,
  /** transform */
  t: string,
  /** top */
  tp: string,
  /** text-align */
  tps: string,
  /** width */
  w: string,
  /** flex-wrap */
  wrap: string,
  /** z-index */
  z: number
};

export default Flex;
