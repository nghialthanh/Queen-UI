import classNames from "classnames";
import { classNameString, propsConfig } from "../../helpers/basicFunc";
import { forwardRef } from "react";

const propsKeysContainer = [
    "className",
    "color",
    "icon",
    "boxShadow",
    "style",
    "bordercolor",
    "box-shadow",
];

function QInput(props, ref) {
    //props:   + color: set theme for input, has 4 color default: red, purple, green, orange
    //         + icon: when icon is svg element, it can change color when input is focused
    //         + className
    //         + style
    //         + boxShadow true or false default is true, show boxShadow when focus input
    //         + bordercolor: "0": color and border color is gray when not focused,
    //                        "1": color and border color is primary color when not focused,
    //                        "2": borderbottom run animation

    return (
        <div
            className={classNameString(
                "__qinput",
                props.color,
                props.className
            )}
            style={props.style}
            box-shadow={props.boxShadow === false ? "0" : "1"}
            bordercolor={props.bordercolor || "0"}
        >
            {props.icon && <span className="__qinput_icon">{props.icon}</span>}
            <input
                className={classNames("__qinput_input", {
                    __qinput_has_icon: props.icon,
                })}
                ref={ref}
                {...propsConfig(props, propsKeysContainer)}
            />
        </div>
    );
}

export default forwardRef(QInput);
