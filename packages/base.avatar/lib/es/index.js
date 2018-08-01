/* @react-alpha/base.avatar version 0.2.24
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";

import { string } from "prop-types";

import { injectGlobal } from "styled-components";

import Flex from "@react-alpha/base.flex";

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, objectWithoutProperties = function(e, t) {
    var r = {};
    for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    return r;
}, taggedTemplateLiteral = function(e, t) {
    return Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
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

injectGlobal(_templateObject);

var Avatar = function(e) {
    var t = e.src, r = e.status, a = e.size, n = e.statusBgColor, o = objectWithoutProperties(e, [ "src", "status", "size", "statusBgColor" ]);
    return React.createElement(Flex, _extends({
        relative: !0,
        nonOverflow: !0,
        className: "ra-base-avatar",
        w: a,
        h: a
    }, o), React.createElement(Flex, {
        full: !0,
        noRepeatBg: !0,
        round: "50%",
        bgi: t
    }), React.createElement(Flex, {
        absolute: !0,
        rt: -.0732233047 * parseInt(a) + "px",
        bm: -.0732233047 * parseInt(a) + "px",
        bc: n || "#fff",
        bw: .0732233047 * parseInt(a) + "px",
        bs: "solid",
        round: "50%",
        w: .4393398282 * parseInt(a) + "px",
        h: .4393398282 * parseInt(a) + "px",
        bgc: pickColor(r)
    }));
};

// 2928932188
// 0214466094
Avatar.propTypes = {
    /* align-self */
    size: string
}, Avatar.defaultProps = {
    size: "32px"
};

export default Avatar;
