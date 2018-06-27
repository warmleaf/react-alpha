/* @react-alpha/base.flex version 0.2.6
 *
 * Copyright (c) 2013-present, 
 * 
 * This source code is licensed under the ISC license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from "prop-types";

import styled from "styled-components";

const Flex = styled.div`
  align-items: ${l => l.column ? l.vc ? !0 === l.vc ? "center" : l.vc : null : l.hc ? !0 === l.hc ? "center" : l.hc : null};
  align-self: ${l => l.as || null};
  background: ${l => l.bg || null};
  background-color: ${l => l.bgc || null};
  border: ${l => l.b || null};
  border-bottom: ${l => l.bb || null};
  border-left: ${l => l.bl || null};
  border-radius: ${l => l.round || null};
  border-right: ${l => l.br || null};
  border-top: ${l => l.bt || null};
  bottom: ${l => l.bm || null};
  box-shadow: ${l => l.shadow || null};
  box-sizing: border-box;
  color: ${l => l.c || null};
  cursor: ${l => l.cur || null};
  display: ${l => l.hidden ? "none" : l.inline ? "inline-flex" : "flex"};
  height: ${l => l.h || null};
  justify-content: ${l => l.column ? l.hc ? !0 === l.hc ? "center" : l.hc : null : l.vc ? !0 === l.vc ? "center" : l.vc : null};
  left: ${l => l.lt || null};
  margin: ${l => l.m || null};
  margin-bottom: ${l => l.mb || null};
  margin-left: ${l => l.ml || null};
  margin-right: ${l => l.mr || null};
  margin-top: ${l => l.mt || null};
  max-height: ${l => l.mah || null};
  max-width: ${l => l.maw || null};
  min-height: ${l => l.mih || null};
  min-width: ${l => l.miw || null};
  flex: ${l => l.full ? 1 : null};
  flex-direction: ${l => l.column ? "column" : null};
  flex-wrap: ${l => l.wrap ? "wrap" : null};
  font-size: ${l => l.size || null};
  padding: ${l => l.p || null};
  padding-bottom: ${l => l.pb || null};
  padding-left: ${l => l.pl || null};
  padding-right: ${l => l.pr || null};
  padding-top: ${l => l.pt || null};
  position: ${l => l.absolute ? "absolute" : l.relative ? "relative" : null};
  opacity: ${l => l.o || null};
  overflow: ${l => l.nonOverflow ? "hidden" : l.scroll ? "scroll" : "auto"};
  right: ${l => l.rt || null};
  top: ${l => l.tp || null};
  text-align: ${l => l.tps || null};
  transform: ${l => l.t || null};
  transition: ${l => l.ani || null};
  width: ${l => l.w || null};
  z-index: ${l => l.z || null};
  -webkit-overflow-scrolling: ${l => l.rebound || null};
`;

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
};

export default Flex;
