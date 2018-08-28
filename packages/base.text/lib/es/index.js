/* @react-alpha/base.text version 0.3.0
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { string } from "prop-types";

import styled from "styled-components";

var taggedTemplateLiteral = function(n, r) {
    return Object.freeze(Object.defineProperties(n, {
        raw: {
            value: Object.freeze(r)
        }
    }));
}, _templateObject = taggedTemplateLiteral([ "\n  align-self: ", ";\n  background: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  border-left: ", ";\n  border-radius: ", ";\n  border-right: ", ";\n  border-top: ", ";\n  text-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  opacity: ", ";\n  text-align: ", ";\n  transform: ", ";\n  transition: ", ";\n  width: ", ";\n  word-break: ", ";\n" ], [ "\n  align-self: ", ";\n  background: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  border-left: ", ";\n  border-radius: ", ";\n  border-right: ", ";\n  border-top: ", ";\n  text-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  opacity: ", ";\n  text-align: ", ";\n  transform: ", ";\n  transition: ", ";\n  width: ", ";\n  word-break: ", ";\n" ]);

function pickBreakType(n) {
    switch (n) {
      case "breakAll":
        return "break-all";

      case "breakWord":
        return "break-word";

      case "noBreak":
      default:
        return "keep-all";
    }
}

var Text = styled.span(_templateObject, function(n) {
    return n.as || null;
}, function(n) {
    return n.bg || null;
}, function(n) {
    return n.bgc || null;
}, function(n) {
    return n.b || null;
}, function(n) {
    return n.bb || null;
}, function(n) {
    return n.bl || null;
}, function(n) {
    return n.round || null;
}, function(n) {
    return n.br || null;
}, function(n) {
    return n.bt || null;
}, function(n) {
    return n.shadow || null;
}, function(n) {
    return n.c || null;
}, function(n) {
    return n.cur || null;
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
    return n.o || null;
}, function(n) {
    return n.ta || null;
}, function(n) {
    return n.t || null;
}, function(n) {
    return n.ani || null;
}, function(n) {
    return n.w || null;
}, function(n) {
    return n.break ? pickBreakType(n.break) : null;
});

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
};

export default Text;
