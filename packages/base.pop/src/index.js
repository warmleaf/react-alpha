import React, { Component, cloneElement } from "react";
import { createPortal } from "react-dom";
import { bool, func, oneOf, string, number, element } from "prop-types";
import Popper from "./popper";

export default class Pop extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.setAttribute("style", "position:absolute;top:0;left:0;");
    this.state = {
      active: false,
      popPosition: {}
    };
    this.timer = null;
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  _activeSetter = evt => {
    const {
      place,
      overkeep,
      children: {
        props: { onPointerDown, onPointerOver, onPointerLeave }
      }
    } = this.props;
    const evtType = evt.type;
    let left = null,
      top = null,
      bottom = null,
      right = null,
      transform = null,
      active = !this.state.active;
    const rect = evt.target.getBoundingClientRect();
    const scrollTop = document.scrollingElement.scrollTop;
    const scrollLeft = document.scrollingElement.scrollLeft;

    if (evtType === "pointerdown" && onPointerDown) onPointerDown();
    if (evtType === "pointerover" && onPointerOver) onPointerOver();
    if (evtType === "pointerleave" && onPointerLeave) onPointerLeave();

    this.arrowWidth = rect.width;
    this.arrowHeight = rect.height;

    switch (place) {
      case "top":
        top = scrollTop + rect.top + "px";
        left = scrollLeft + rect.left + rect.width / 2 + "px";
        transform = "translate(-50%, -100%)";
        this.darrowDirection = "bottom";
        break;
      case "left":
        top = scrollTop + rect.top + rect.height / 2 + "px";
        left = scrollLeft + rect.left + "px";
        transform = "translate(-100%,-50%)";
        this.darrowDirection = "right";
        break;
      case "bottom":
        top = scrollTop + rect.top + rect.height + "px";
        left = scrollLeft + rect.left + rect.width / 2 + "px";
        transform = "translateX(-50%)";
        this.darrowDirection = "top";
        break;
      case "right":
      default:
        left = scrollLeft + rect.left + rect.width + "px";
        top = scrollTop + rect.top + rect.height / 2 + "px";
        transform = "translateY(-50%)";
        this.darrowDirection = "left";
        break;
    }

    if (overkeep) {
      if (evtType === "pointerleave") {
        if (!this.timer) {
          this.timer = setTimeout(() => {
            this.setState({ active: false });
            clearTimeout(this.timer);
            this.timer = null;
          }, 100);
          return;
        }
      }
      if (evtType === "pointerover") {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        active = true;
      }
    }

    this.setState({
      active,
      popPosition: { left, right, top, bottom, transform }
    });
  };

  _popContentLeave = ctx => {
    const { onPointerLeave } = ctx.props;
    const { overkeep } = this.props;
    if (!overkeep) return onPointerLeave && onPointerLeave();
    this.lock = false;
    this.setState({ active: false });
  };

  _popContentOver = ctx => {
    const { onPointerOver } = ctx.props;
    const { overkeep } = this.props;
    if (!overkeep) return onPointerOver && onPointerOver();
    clearTimeout(this.timer);
    this.timer = null;
  };

  render() {
    const { content, tigger, children, popRender, arrowSize } = this.props;
    if (content) {
      let ctx = null,
        evt = null;
      switch (typeof content) {
        case "object":
          ctx = content;
          break;
        case "function":
          ctx = content();
          break;
        case "string":
        default:
          ctx = popRender ? (
            <popRender>{content}</popRender>
          ) : (
            <Popper
              width={this.arrowWidth}
              height={this.arrowHeight}
              size={arrowSize}
              direcion={this.darrowDirection}
            >
              {content}
            </Popper>
          );
          break;
      }

      switch (tigger) {
        case "click":
          evt = { onPointerDown: this._activeSetter };
          break;
        case "over":
        default:
          evt = {
            onPointerOver: this._activeSetter,
            onPointerLeave: this._activeSetter
          };
          break;
      }
      return [
        cloneElement(children, { ...evt }),
        this.state.active &&
          createPortal(
            cloneElement(ctx, {
              style: {
                position: "relative",
                ...this.state.popPosition
              },
              onPointerLeave: () => this._popContentLeave(ctx),
              onPointerOver: () => this._popContentOver(ctx)
            }),
            this.el
          )
      ];
    }
    return createPortal(this.props.children, this.el);
  }
}

Pop.propTypes = {
  /** pop content */
  content: string | func | element,
  /** if is a modal or not */
  modal: bool,
  /** pop place */
  place: oneOf(["left", "top", "right", "bottom"]),
  /** rerender function which back to a pop element */
  popRender: func,
  /** pop arrow size if have a arrow */
  arrowSize: number,
  /** if need keep active only if mouse leave from pop, this is usefull to menu */
  overkeep: bool
};

Pop.defaultProps = {
  modal: false,
  place: "right",
  arrowSize: 10,
  overkeep: false
};
