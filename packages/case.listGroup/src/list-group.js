import React, { Component, cloneElement, isValidElement } from "react";
import {
  bool,
  func,
  array,
  object,
  oneOfType,
  string,
  element
} from "prop-types";
import kindOf from "kind-of";
import Flex from "@react-alpha/base.flex";
import Text from "@react-alpha/base.text";

class ListGroup extends Component {
  displayName = "ListGroup";
  state = {
    expand: this.props.expand,
    doFilter: !this.props.expand,
    isOver: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.controlled && props.expand === state.doFilter) {
      return {
        ...state,
        doFilter: !props.expand
      };
    }
    return null;
  }

  _titleOverHandle = evt => {
    if (this.props.hasMouse && evt.pointerType === "mouse") {
      this.setState({ isOver: true });
    }
  };

  _titleLeaveHandle = () => this.setState({ isOver: false });
  _titleClickHandle = () => {
    const { onExpandStatusChange, justShowAvatar, avatar } = this.props;
    if (avatar && justShowAvatar) return true;
    if (onExpandStatusChange) onExpandStatusChange(this.state.doFilter);
    this.setState({ doFilter: !this.state.doFilter });
  };

  _containerOverHandle = () => {
    const { onMouseOver, justShowAvatar, avatar } = this.props;
    if (avatar && justShowAvatar) {
      this.setState({ doFilter: !this.state.doFilter });
    }
    if (onMouseOver) onMouseOver(true);
  };

  _childrenRender = () => {
    const { list, itemRender } = this.props;
    if (kindOf(list) === "array") {
      const dataAfterFilter = this.state.doFilter
        ? list.filter(d => d.keep)
        : list;
      if (dataAfterFilter.length === 0) return null;
      return dataAfterFilter.map(item => itemRender(item));
    }
  };

  _actionRender = () => {
    const { actionRender, info } = this.props;
    if (!actionRender) return null;
    const Child = actionRender(info);
    const Props = {};
    if (kindOf(Child) === "string") return Child;
    if (kindOf(Child) === "function") return Child();
    if (!isValidElement(Child))
      throw Error("actionRender should return a react elemant");
    if (Child.props.onClick)
      Props.onClick = e => {
        e.stopPropagation();
        Child.props.onClick();
      };
    if (Child.props.onMouseDown)
      Props.onClick = e => {
        e.stopPropagation();
        Child.props.onMouseDown();
      };
    if (Child.props.onMouseUp)
      Props.onClick = e => {
        e.stopPropagation();
        Child.props.onMouseUp();
      };
    if (Child.props.onTouchStart)
      Props.onClick = e => {
        e.stopPropagation();
        Child.props.onTouchStart();
      };
    if (Child.props.onTouchEnd)
      Props.onClick = e => {
        e.stopPropagation();
        Child.props.onTouchEnd();
      };
    if (
      Props.onClick ||
      Props.onMouseDown ||
      Props.onMouseUp ||
      Props.onTouchStart ||
      Props.onTouchEnd
    ) {
      Props.onPointerDown = e => {
        e.stopPropagation();
      };
    }
    return cloneElement(Child, Props);
  };

  render() {
    const {
      title,
      hasMouse,
      actionRender,
      itemRender,
      avatar,
      justShowAvatar,
      popperChildRender,
      ...rest
    } = this.props;
    const hide = avatar && justShowAvatar;
    return (
      <Flex
        column
        className="ra-case-list-group"
        onMouseEnter={this._containerOverHandle}
        onMouseLeave={this._containerOverHandle}
        {...rest}
      >
        <Flex
          hc
          className="ra-case-list-group-title-container"
          onPointerOver={this._titleOverHandle}
          onPointerLeave={this._titleLeaveHandle}
          onPointerDown={this._titleClickHandle}
        >
          {avatar}
          {kindOf(title) !== "string" ? (
            title
          ) : (
            <Text as="center" className="ra-case-list-group-title">
              {title}
            </Text>
          )}
          {!hasMouse && this._actionRender()}
          {hasMouse && this.state.isOver && this._actionRender()}
          {hide && popperChildRender()}
        </Flex>
        <Flex column className="ra-case-list-group-list-container">
          {this._childrenRender()}
        </Flex>
      </Flex>
    );
  }
}

ListGroup.propTypes = {
  /* action info */
  info: object,
  /** expand status of ListGroup */
  expand: bool,
  /** if have mouse event */
  hasMouse: bool,
  /** on expand status change function */
  onExpandStatusChange: func,
  /** on mouse over function */
  onMouseOver: func,
  /** action rerender that if function return a react element, then must return one element */
  actionRender: func,
  /** item render */
  itemRender: func.isRequired,
  /** data of ListGroup */
  list: array.isRequired,
  /** title of ListGroup */
  title: oneOfType([string, element]),
  /** avatar of ListGroup */
  avatar: element,
  /** if show avatar only */
  justShowAvatar: bool,
  /** if need a pop show which is useful for menu */
  popperChildRender: func
};

ListGroup.defaultProps = {
  expand: true,
  hasMouse: true,
  justShowAvatar: false,
  itemRender: () => {},
  list: []
};

export default ListGroup;
