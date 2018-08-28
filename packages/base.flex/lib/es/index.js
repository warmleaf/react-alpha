/* @react-alpha/base.flex version 0.3.0
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from "prop-types";

import styled from "styled-components";

var taggedTemplateLiteral = function(n, r) {
    return Object.freeze(Object.defineProperties(n, {
        raw: {
            value: Object.freeze(r)
        }
    }));
}, _templateObject = taggedTemplateLiteral([ "\n  align-items: ", ";\n  align-self: ", ";\n  background: ", ";\n  background-color: ", ";\n  background-image: ", ";\n  background-repeat: ", ";\n  background-size: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n  border-left: ", ";\n  border-radius: ", ";\n  border-right: ", ";\n  border-style: ", ";\n  border-top: ", ";\n  border-width: ", ";\n  bottom: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  display: ", ";\n  height: ", ";\n  justify-content: ", ";\n  left: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  position: ", ";\n  opacity: ", ";\n  overflow: ", ";\n  right: ", ";\n  top: ", ";\n  text-align: ", ";\n  transform: ", ";\n  transition: ", ";\n  width: ", ";\n  z-index: ", ";\n  -webkit-overflow-scrolling: ", ";\n" ], [ "\n  align-items: ", ";\n  align-self: ", ";\n  background: ", ";\n  background-color: ", ";\n  background-image: ", ";\n  background-repeat: ", ";\n  background-size: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n  border-left: ", ";\n  border-radius: ", ";\n  border-right: ", ";\n  border-style: ", ";\n  border-top: ", ";\n  border-width: ", ";\n  bottom: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  display: ", ";\n  height: ", ";\n  justify-content: ", ";\n  left: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  position: ", ";\n  opacity: ", ";\n  overflow: ", ";\n  right: ", ";\n  top: ", ";\n  text-align: ", ";\n  transform: ", ";\n  transition: ", ";\n  width: ", ";\n  z-index: ", ";\n  -webkit-overflow-scrolling: ", ";\n" ]), Flex = styled.div(_templateObject, function(n) {
    return n.column ? n.vc ? !0 === n.vc ? "center" : n.vc : null : n.hc ? !0 === n.hc ? "center" : n.hc : null;
}, function(n) {
    return n.as || null;
}, function(n) {
    return n.bg || null;
}, function(n) {
    return n.bgc || null;
}, function(n) {
    return n.bgi ? "url(" + n.bgi + ")" : null;
}, function(n) {
    return n.noRepeatBg ? "no-repeat" : null;
}, function(n) {
    return n.bgi ? n.bgs || "100%" : n.bgs || null;
}, function(n) {
    return n.b || null;
}, function(n) {
    return n.bb || null;
}, function(n) {
    return n.bc || null;
}, function(n) {
    return n.bl || null;
}, function(n) {
    return n.round || null;
}, function(n) {
    return n.br || null;
}, function(n) {
    return n.bs || null;
}, function(n) {
    return n.bt || null;
}, function(n) {
    return n.bw || null;
}, function(n) {
    return n.bm || null;
}, function(n) {
    return n.shadow || null;
}, function(n) {
    return n.c || null;
}, function(n) {
    return n.cur || null;
}, function(n) {
    return n.hidden ? "none" : n.inline ? "inline-flex" : "flex";
}, function(n) {
    return n.h || null;
}, function(n) {
    return n.column ? n.hc ? !0 === n.hc ? "center" : n.hc : null : n.vc ? !0 === n.vc ? "center" : n.vc : null;
}, function(n) {
    return n.lt || null;
}, function(n) {
    return n.m || null;
}, function(n) {
    return n.mb || null;
}, function(n) {
    return n.ml || null;
}, function(n) {
    return n.mr || null;
}, function(n) {
    return n.mt || null;
}, function(n) {
    return n.mah || null;
}, function(n) {
    return n.maw || null;
}, function(n) {
    return n.mih || null;
}, function(n) {
    return n.miw || null;
}, function(n) {
    return n.full ? 1 : null;
}, function(n) {
    return n.column ? "column" : null;
}, function(n) {
    return n.wrap ? "wrap" : null;
}, function(n) {
    return n.size || null;
}, function(n) {
    return n.p || null;
}, function(n) {
    return n.pb || null;
}, function(n) {
    return n.pl || null;
}, function(n) {
    return n.pr || null;
}, function(n) {
    return n.pt || null;
}, function(n) {
    return n.absolute ? "absolute" : n.relative ? "relative" : null;
}, function(n) {
    return n.o || null;
}, function(n) {
    return n.nonOverflow ? "hidden" : n.scroll ? "scroll" : "auto";
}, function(n) {
    return n.rt || null;
}, function(n) {
    return n.tp || null;
}, function(n) {
    return n.tps || null;
}, function(n) {
    return n.t || null;
}, function(n) {
    return n.ani || null;
}, function(n) {
    return n.w || null;
}, function(n) {
    return n.z || null;
}, function(n) {
    return n.rebound || null;
});

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
