import React, { forwardRef } from "react";
import { classNameString, propsConfig } from "helpers/basicFunc";

const propsKeysContainer = ["className", "color", "children"];

const QButton = (props, ref) => {
    //  props:  +color
    //          + className
    //          + childrem
    //          + mode: "1"-bg is primary,"2" bg is white
    return (
        <button
            className={classNameString(
                "__qbutton",
                props.color,
                props.className
            )}
            ref={ref}
            mode={props.mode || "1"}
            {...propsConfig(props, propsKeysContainer)}
        >
            {props.children}
        </button>
    );
};
export default forwardRef(QButton);
