"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.getStatus = void 0;
function getStatus(input) {
    if (typeof input === "number") {
        if (input === 0)
            return STATUS.CREATED;
        else if (input === 1)
            return STATUS.MINTABLE;
        else if (input === 2)
            return STATUS.STANDBY;
        else if (input === 3)
            return STATUS.CUSTOMIZABLE;
        else
            return -1;
    }
    else {
        if (input === STATUS.CREATED)
            return 0;
        else if (input === STATUS.MINTABLE)
            return 1;
        else if (input === STATUS.STANDBY)
            return 2;
        else if (input === STATUS.CUSTOMIZABLE)
            return 3;
        else
            return -1;
    }
}
exports.getStatus = getStatus;
var STATUS;
(function (STATUS) {
    STATUS["CREATED"] = "CREATED";
    STATUS["MINTABLE"] = "MINTABLE";
    STATUS["STANDBY"] = "STANDBY";
    STATUS["CUSTOMIZABLE"] = "CUSTOMIZABLE";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
