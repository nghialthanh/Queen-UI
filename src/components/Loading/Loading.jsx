import { classNameString } from "helpers/basicFunc";
import { forwardRef } from "react";

const divStyle = (width, height) => {
    return {
        container: {
            height: `${height}px` || `${width}px` || "80px",
            width: `${width}px` || "80px",
        },
        divItem: {
            left: width ? `${width / 10}px` : "8px",
            width: width ? `${width / 5}px` : "16px",
        },
    };
};

function QLoading(props, ref) {
    return (
        <div
            className={classNameString(
                "__qloading",
                props.color,
                props.className
            )}
            style={divStyle(props.width, props.height).container}
            data-width={props.width}
            {...props}
            ref={ref}
        >
            <div style={divStyle(props.width, props.height).divItem} />
            <div
                style={{
                    ...divStyle(props.width, props.height).divItem,
                    left: props.width ? `${(props.width / 5) * 2}px` : "32px",
                }}
            />
            <div
                style={{
                    ...divStyle(props.width, props.height).divItem,
                    left: props.width ? `${(props.width / 5) * 3.5}px` : "56px",
                }}
            />
            {props.length >= 4 && (
                <div
                    style={{
                        ...divStyle(props.width, props.height).divItem,
                        left: props.width ? `${props.width}px` : "80px",
                    }}
                />
            )}
            {props.length >= 5 && (
                <div
                    style={{
                        ...divStyle(props.width, props.height).divItem,
                        left: props.width ? `${props.width * 1.3}px` : "204px",
                    }}
                />
            )}
        </div>
    );
}

export default forwardRef(QLoading);
