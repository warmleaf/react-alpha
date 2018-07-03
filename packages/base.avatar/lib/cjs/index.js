/* @react-alpha/base.avatar version 0.2.11
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

function _interopDefault(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var PropTypes = require("prop-types"), PropTypes__default = _interopDefault(PropTypes), styled = require("styled-components"), styled__default = _interopDefault(styled), React = require("react"), React__default = _interopDefault(React);

/* @react-alpha/base.flex version 0.2.11
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Flex = styled__default.div`
  align-items: ${e => e.column ? e.vc ? !0 === e.vc ? "center" : e.vc : null : e.hc ? !0 === e.hc ? "center" : e.hc : null};
  align-self: ${e => e.as || null};
  background: ${e => e.bg || null};
  background-color: ${e => e.bgc || null};
  background-image: ${e => e.bgi ? "url(" + e.bgi + ")" : null};
  background-repeat: ${e => e.noRepeatBg ? "no-repeat" : null};
  background-size: ${e => e.bgi ? e.bgs || "100%" : e.bgs || null};
  border: ${e => e.b || null};
  border-bottom: ${e => e.bb || null};
  border-color: ${e => e.bc || null};
  border-left: ${e => e.bl || null};
  border-radius: ${e => e.round || null};
  border-right: ${e => e.br || null};
  border-style: ${e => e.bs || null};
  border-top: ${e => e.bt || null};
  border-width: ${e => e.bw || null};
  bottom: ${e => e.bm || null};
  box-shadow: ${e => e.shadow || null};
  box-sizing: border-box;
  color: ${e => e.c || null};
  cursor: ${e => e.cur || null};
  display: ${e => e.hidden ? "none" : e.inline ? "inline-flex" : "flex"};
  height: ${e => e.h || null};
  justify-content: ${e => e.column ? e.hc ? !0 === e.hc ? "center" : e.hc : null : e.vc ? !0 === e.vc ? "center" : e.vc : null};
  left: ${e => e.lt || null};
  margin: ${e => e.m || null};
  margin-bottom: ${e => e.mb || null};
  margin-left: ${e => e.ml || null};
  margin-right: ${e => e.mr || null};
  margin-top: ${e => e.mt || null};
  max-height: ${e => e.mah || null};
  max-width: ${e => e.maw || null};
  min-height: ${e => e.mih || null};
  min-width: ${e => e.miw || null};
  flex: ${e => e.full ? 1 : null};
  flex-direction: ${e => e.column ? "column" : null};
  flex-wrap: ${e => e.wrap ? "wrap" : null};
  font-size: ${e => e.size || null};
  padding: ${e => e.p || null};
  padding-bottom: ${e => e.pb || null};
  padding-left: ${e => e.pl || null};
  padding-right: ${e => e.pr || null};
  padding-top: ${e => e.pt || null};
  position: ${e => e.absolute ? "absolute" : e.relative ? "relative" : null};
  opacity: ${e => e.o || null};
  overflow: ${e => e.nonOverflow ? "hidden" : e.scroll ? "scroll" : "auto"};
  right: ${e => e.rt || null};
  top: ${e => e.tp || null};
  text-align: ${e => e.tps || null};
  transform: ${e => e.t || null};
  transition: ${e => e.ani || null};
  width: ${e => e.w || null};
  z-index: ${e => e.z || null};
  -webkit-overflow-scrolling: ${e => e.rebound || null};
`;

Flex.propTypes = {
    /* align-self */
    as: PropTypes__default.string,
    b: PropTypes__default.string,
    /* border-bottom */
    bb: PropTypes__default.string,
    /* border-left */
    bl: PropTypes__default.string,
    /* border-radius */
    br: PropTypes__default.string,
    /* background */
    bg: PropTypes__default.string,
    /* background-color */
    bgc: PropTypes__default.string,
    /* border-top */
    bt: PropTypes__default.string,
    /* inline flex */
    inline: PropTypes__default.string,
    /* vertical center(default) */
    vc: PropTypes__default.string,
    /* horizontal center(default) */
    hc: PropTypes__default.string,
    round: PropTypes__default.string
};

var _extends = Object.assign || function(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = arguments[l];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, objectWithoutProperties = function(e, l) {
    var t = {};
    for (var r in e) l.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
}, taggedTemplateLiteral = function(e, l) {
    return Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(l)
        }
    }));
}, _templateObject = taggedTemplateLiteral([ "\n  .ra-base-flex > img {\n    width: 100%;\n    height: 100%;\n  }\n" ], [ "\n  .ra-base-flex > img {\n    width: 100%;\n    height: 100%;\n  }\n" ]);

function pickColor(e) {
    switch (e) {
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

styled.injectGlobal(_templateObject);

var Avatar = function(e) {
    var l = e.src, t = e.status, r = e.size, n = e.statusBgColor, a = objectWithoutProperties(e, [ "src", "status", "size", "statusBgColor" ]);
    return React__default.createElement(Flex, _extends({
        relative: !0,
        nonOverflow: !0,
        className: "ra-base-avatar",
        w: r,
        h: r
    }, a), React__default.createElement(Flex, {
        full: !0,
        noRepeatBg: !0,
        round: "50%",
        bgi: l
    }), React__default.createElement(Flex, {
        absolute: !0,
        rt: -.0732233047 * parseInt(r) + "px",
        bm: -.0732233047 * parseInt(r) + "px",
        bc: n || "#fff",
        bw: .0732233047 * parseInt(r) + "px",
        bs: "solid",
        round: "50%",
        w: .4393398282 * parseInt(r) + "px",
        h: .4393398282 * parseInt(r) + "px",
        bgc: pickColor(t)
    }));
};

// 2928932188
// 0214466094
Avatar.propTypes = {
    /* align-self */
    size: PropTypes.string
}, Avatar.defaultProps = {
    size: "32px"
}, exports.default = Avatar;
