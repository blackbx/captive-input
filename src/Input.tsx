// Libraries
import * as React from "react";
import cn from "classnames";

// Own Components
import PureBaseComponent from "./PureBaseComponent";

// Props
import { Props } from "./Input.props";

// Styles
import "./Input.scss";

export default class Input extends PureBaseComponent<Props> {
  render() {
    const {
      className,
      placeholder,
      elementType = "Input",
      value,
      inputType,
      autoFocus = false,
      isValid,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      name,
      dataTestId,
      theme = "default",
      ...rest
    } = this.props;

    const classNames = cn(className, elementType, {
      [`${elementType}--${theme}`]: theme
    });

    if (elementType === "Input") {
      return (
        <input
          className={classNames}
          autoFocus={autoFocus}
          placeholder={placeholder}
          defaultValue={value}
          onBlur={onBlur}
          type={inputType}
          onChange={onChange}
          onFocus={onFocus}
          name={name}
          onKeyDown={onKeyDown}
          {...rest}
          data-testid={dataTestId}
        />
      );
    }
  }
}
