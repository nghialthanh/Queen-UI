import React, { forwardRef } from "react";
import { classNameString, propsConfig } from "helpers/basicFunc";

const propsKeysContainer = [
    "className",
    "color",
    "children",
    "circle",
    "style",
];

function QRadio(props, ref) {
    // props    + color
    //          + className
    //          + style
    //          + children
    //          + name
    //          + checked: condition to check
    //          + value
    //          + onChange
    //          + mode: true then has white circle in middle checkmark
    return (
        <label
            className={classNameString(
                "__qradio",
                props.color,
                props.className
            )}
            ref={ref}
            style={props.style}
        >
            <span className="__qradio_title">{props.children}</span>
            <input
                className="__qradio_input"
                type="radio"
                name={props.name}
                checked={props.checked}
                value={props.value}
                onChange={props.onChange}
                {...propsConfig(props, propsKeysContainer)}
            />
            <div
                className="__qradio_checkmark"
                mode={props.mode || "none"}
            ></div>
        </label>
    );
}
export default forwardRef(QRadio);
