import { ColorTheme } from "../constants/theme";

// --------------------- compare deep ------------------------//
export function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            (areObjects && !deepEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)
        ) {
            return false;
        }
    }
    return true;
}
// ------------------------- check Object ------------------------//
export function isObject(object) {
    return object != null && typeof object === "object";
}
//-------------------------- cover unicode remove accented letters //
export function removeAccents(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}

//----------------------- setting select --------------------//

export const optionQSelect = (data, keyValue, keyLabel) => {
    let lst = [];
    lst = data.map((e) => {
        return {
            ...e,
            value: e[keyValue],
            label: e[keyLabel],
        };
    });
    return lst;
};

//------------------------ instead of if else ---------------//
// const expr = 'Papayas';
// const matched = match(expr, {
//     Oranges: 'Oranges are $0.59 a pound.',
//     Mangoes: 'Mangoes and papayas are $2.79 a pound.',
//     Papayas: 'Mangoes and papayas are $2.79 a pound.',
//     default: `Sorry, we are out of ${expr}.`,
//   });
export const QCondition = (expression, cases) => {
    return cases[expression] || cases?.default;
};

//------------------------ add className for component -------------//

export const classNameString = (defaultClass, color, className) => {
    let string = defaultClass + " ";
    if (ColorTheme.includes(color)) string += `__q${color} `;
    else string += `__q${ColorTheme[0]} `;
    if (className) string += className;
    return string;
};

//------------------------ remove item necessary props -------------//
export const propsConfig = (props, propsKeysContainer) => {
    let objProps = {};
    for (const [key, value] of Object.entries(props)) {
        if (!propsKeysContainer.includes(key))
            objProps = {
                ...objProps,
                [key]: value,
            };
    }
    return objProps;
};
