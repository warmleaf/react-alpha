/* @react-alpha/base.avatar version 0.2.8
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes, { string } from "prop-types";

import styled, { injectGlobal } from "styled-components";

import React from "react";

/* @react-alpha/base.flex version 0.2.8
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const Flex = styled.div`
  align-items: ${l => l.column ? l.vc ? !0 === l.vc ? "center" : l.vc : null : l.hc ? !0 === l.hc ? "center" : l.hc : null};
  align-self: ${l => l.as || null};
  background: ${l => l.bg || null};
  background-color: ${l => l.bgc || null};
  background-image: ${l => l.bgi ? "url(" + l.bgi + ")" : null};
  background-size: ${l => l.bgi ? l.bgs || "100%" : l.bgs || null};
  border: ${l => l.b || null};
  border-bottom: ${l => l.bb || null};
  border-color: ${l => l.bc || null};
  border-left: ${l => l.bl || null};
  border-radius: ${l => l.round || null};
  border-right: ${l => l.br || null};
  border-style: ${l => l.bs || null};
  border-top: ${l => l.bt || null};
  border-width: ${l => l.bw || null};
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

var _extends = Object.assign || function(l) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (l[n] = r[n]);
    }
    return l;
}, objectWithoutProperties = function(l, e) {
    var r = {};
    for (var n in l) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(l, n) && (r[n] = l[n]);
    return r;
}, taggedTemplateLiteral = function(l, e) {
    return Object.freeze(Object.defineProperties(l, {
        raw: {
            value: Object.freeze(e)
        }
    }));
}, _templateObject = taggedTemplateLiteral([ "\n  .ra-base-flex > img {\n    width: 100%;\n    height: 100%;\n  }\n" ], [ "\n  .ra-base-flex > img {\n    width: 100%;\n    height: 100%;\n  }\n" ]);

function pickColor(l) {
    switch (l) {
      case "dnd":
        return "#f04747";

      case "idle":
        return "#faa61a";

      case "on":
        return "#43b581";

      case "off":
      default:
        return "#747f8d";
    }
}

injectGlobal(_templateObject);

var Avatar = function(l) {
    var e = l.src, r = l.status, n = l.size, t = l.statusBgColor, o = objectWithoutProperties(l, [ "src", "status", "size", "statusBgColor" ]);
    return React.createElement(Flex, _extends({
        relative: !0,
        className: "ra-base-avatar",
        w: n,
        h: n
    }, o), React.createElement(Flex, {
        full: !0,
        round: "50%",
        bgi: e
    }), React.createElement(Flex, {
        absolute: !0,
        rt: .0214466094 * parseInt(n) + "px",
        bm: .0214466094 * parseInt(n) + "px",
        bc: t || "#fff",
        bw: .0425 * parseInt(n) + "px",
        bs: "solid",
        round: "50%",
        w: .2928932188 * parseInt(n) + "px",
        h: .2928932188 * parseInt(n) + "px",
        bgc: pickColor(r)
    }));
};

Avatar.propTypes = {
    /* align-self */
    size: string
}, Avatar.defaultProps = {
    size: "32px"
};

export default Avatar;
