"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkConfig = void 0;
require("dotenv/config");
var networks;
(function (networks) {
    networks["MAINNET"] = "MAINNET";
    //
    networks["NONE"] = "";
})(networks || (networks = {}));
const env = process.env;
exports.forkConfig = (() => {
    if (env.FORK === undefined || env.FORK === networks.NONE)
        return undefined;
    return { url: env[env.FORK], blockNumber: Number(env.FORK_BN) };
})();
