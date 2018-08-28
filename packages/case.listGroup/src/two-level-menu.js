import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import {
  bool,
  func,
  array,
  object,
  oneOfType,
  string,
  element
} from "prop-types";
import MultipleList from "./multiple-list";
import ListGroup from "./list-group";

injectGlobal`
.ra-case-two-level-menu{
    background-color: #fff;
    .item{
        height: 42px;
        line-height: 42px;
        padding-left: 12px;
        padding-right: 12px;

        .on, :hover {
            background-color: #53ac56;
        }
    }
    &.closure {
        .ra-case-list-group{
            height: 42px;
            overflow: hidden;
        }
    }
    .ra-case-list-group-title-container{
        height: 42px;
        padding-left: 12px;
        padding-right: 12px;

        .on, :hover {
            background-color: #53ac56;
        }
    }
}
`;

class TwoLevelMenu extends Component {
  render() {
    const { data, itemRender, avatarRender, multiple, expand } = this.props;
    return (
      <MultipleList
        inline
        multiple={multiple}
        className={`ra-case-two-level-menu${!expand ? " closure" : ""}`}
      >
        {data.map(item => {
          if (item.children) {
            return (
              <ListGroup
                expand={false}
                avatar={avatarRender(item.avatar)}
                title={item.label}
                itemRender={item => itemRender(item, true)}
                list={item.children}
                justShowAvatar={!expand}
              />
            );
          }
          return itemRender(item, expand);
        })}
      </MultipleList>
    );
  }
}

TwoLevelMenu.propTypes = {
  expand: bool,
  data: object,
  multiple: bool,
  itemRender: func,
  avatarRender: func
};

TwoLevelMenu.defaultProps = {
  multiple: true,
  expand: true
};

export default TwoLevelMenu;
