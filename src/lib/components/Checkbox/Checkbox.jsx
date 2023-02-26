import { classNameString } from "helpers/basicFunc";
import React, { forwardRef } from "react";

function QCheckBox(props, ref) {
    // Component not yet fully developed NOT USE
    return (
        <label
            className={classNameString(
                "__qcheckbox",
                props.color,
                props.className
            )}
            // style: circle and square
            style-cus={props.styleCus}
            // left or right
            box-position={props.boxPosition}
            style={props.style}
            ref={ref}
        >
            <input
                type="checkbox"
                checked={props.checked}
                value={props.value}
                onChange={props.onChange}
            />
            <span className="__qcheckbox_title">{props.children}</span>
            <div className="__qcheckbox_checkmark"></div>
        </label>
    );
}
export default forwardRef(QCheckBox);
