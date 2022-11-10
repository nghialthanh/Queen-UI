import React, { useEffect, useRef, useState } from "react";

import useOutside from "hook/useOutside";
import { classNameString, removeAccents } from "helpers/basicFunc";
import { ICON_ARROW_DOWN_SMALL, ICON_CHECK, ICON_CLOSE } from "constants/icon";
import QInput from "../Input/Input";
import classNames from "classnames";

function QSelect(props) {
    // props:   + data - data for list
    //          + value - set value for input
    //          + onChange - event change value input return object if mode is false and return array if mode is multiple
    //          + autoComplete - search in the list that contains value input
    //          + classListName - className of list
    //          + mode - allow user chose multiple
    //          + color
    //          +className className of select
    //          +style
    //          +placeholder
    // item of data must have value and label => use optionQSelect for this
    const [_value, _setValue] = useState("");
    const [_focus, _setFocus] = useState(false);
    const [_data, _setData] = useState([]);
    const wrapperRef = useRef(null);
    const inputRef = useRef();
    useOutside(wrapperRef, _focus, _setFocus);

    const handleChangeInput = (e) => {
        let arr = props.data.filter(
            (ele) =>
                removeAccents(ele.label)
                    .toUpperCase()
                    .indexOf(removeAccents(e).toUpperCase()) !== -1
        );
        _setData(arr);
        _setValue(e);
    };

    const handlePickItem = (e) => {
        if (props.mode === "multiple") {
            if (
                Array.isArray(props.value) &&
                props.value?.some((ele) => ele.value === e.value)
            ) {
                props.onChange(
                    props.value?.filter((ele) => ele.value !== e.value)
                );
            } else {
                const arr = Array.isArray(props.value)
                    ? [...props.value, e]
                    : [e];
                props.onChange(arr);
            }
        } else props.onChange(e);
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
        if (_value) _setValue("");
    }, [_focus]);

    const renderItem = () => {
        const list = _value ? _data : props.data;
        return list.map((element) => {
            return (
                <div
                    className={classNames("__qselect_popup_list_item", {
                        __qselect_popup_list_active_item:
                            element.value === props.value?.value,
                    })}
                    key={element.value}
                    onClick={() => {
                        handlePickItem(element);
                        _setFocus(false);
                    }}
                >
                    <span>{element.label}</span>
                    {element.value === props.value?.value && (
                        <ICON_CHECK className="__qselect_popup_list_active_icon" />
                    )}
                </div>
            );
        });
    };

    const renderItemMultiple = () => {
        return (
            Array.isArray(props.value) &&
            props.value?.map((ele) => {
                return (
                    <div className="__qselect_popup_pick_item" key={ele.value}>
                        {ele.label}
                        <ICON_CLOSE
                            onClick={() =>
                                props.onChange(
                                    props.value?.filter(
                                        (e) => e.value !== ele.value
                                    )
                                )
                            }
                        />
                    </div>
                );
            })
        );
    };
    return (
        <div
            className={classNameString(
                "__qselect",
                props.color,
                props.className
            )}
            ref={wrapperRef}
            style={props.style}
        >
            <div className="__qselect_pick">
                {props.mode === "multiple" && renderItemMultiple()}
                <QInput
                    className="__qselect_pick_input"
                    placeholder={props.placeholder}
                    type="text"
                    value={props.value?.label || ""}
                    disabled={true}
                    color={props.color}
                    boxShadow={false}
                />
            </div>
            <div
                className="__qselect_icon_shadow"
                bordercolor={props.bordercolor ? "1" : "0"}
                onClick={() => _setFocus(true)}
            >
                <ICON_ARROW_DOWN_SMALL />
            </div>
            {_focus && (
                <div className="__qselect_popup">
                    <div className="__qselect_popup_pick">
                        {props.mode === "multiple" && renderItemMultiple()}
                        <QInput
                            placeholder={props.placeholder}
                            type="text"
                            value={_value}
                            onChange={(event) => {
                                handleChangeInput(event.target.value);
                            }}
                            ref={inputRef}
                            boxShadow={false}
                            color={props.color}
                        />
                    </div>
                    <div
                        className={
                            "__qselect_popup_list " + props.classListName || ""
                        }
                    >
                        {renderItem()}
                    </div>
                </div>
            )}
        </div>
    );
}
export default QSelect;
