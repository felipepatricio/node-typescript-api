"use strict";
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-03-19
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isCacheLike(cache) {
    return !!(cache.set && cache.get && cache.del &&
        typeof cache.get === 'function' && typeof cache.set === 'function' && typeof cache.del === 'function');
}
exports.default = isCacheLike;
//# sourceMappingURL=isCacheLike.js.map