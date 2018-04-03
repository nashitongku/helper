/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} object
 */
function deepClone(object) {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null == object || "object" != typeof object) return object;
    // Handle Date
    if (object instanceof Date) {
        copy = new Date();
        copy.setTime(object.getTime());
        return copy;
    };
    // Handle Array
    if (object instanceof Array) {
        copy = [];
        for (var i = 0, len = object.length; i < len; i++) {
            copy[i] = deepClone(object[i]);
        };
        return copy;
    };
    // Handle Object
    if (object instanceof Object) {
        copy = {};
        for (var attr in object) {
            if (object.hasOwnProperty(attr)) copy[attr] = deepClone(object[attr]);
        };
        return copy;
    };
    throw new Error("Unable to copy object! Its type isn't supported.");
};

export {deepClone}