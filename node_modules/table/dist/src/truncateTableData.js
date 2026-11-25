"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateTableData = exports.truncateString = void 0;
const utils_1 = require("./utils");
const omission = '…';
/**
 * Truncates the input to the given number of characters, the omission included. Characters are counted
 * as they are displayed: ANSI escape codes do not count, and an emoji or a letter with its accents
 * counts once.
 */
const truncateString = (input, length) => {
    // Not even the escape codes and the text together exceed the length.
    if (input.length <= length) {
        return input;
    }
    const graphemes = (0, utils_1.splitGraphemes)((0, utils_1.stripAnsi)(input));
    if (graphemes.length <= length) {
        return input;
    }
    const keep = length - omission.length;
    if (keep < 1) {
        return omission;
    }
    const positions = graphemes.slice(0, keep).reduce((total, grapheme) => {
        return total + grapheme.positions;
    }, 0);
    // Cutting the input keeps its ANSI escape codes and closes any that are still open, so that styles do
    // not leak past the cell.
    return (0, utils_1.sliceAnsi)(input, 0, positions) + omission;
};
exports.truncateString = truncateString;
const truncateTableData = (rows, truncates) => {
    return rows.map((cells) => {
        return cells.map((cell, cellIndex) => {
            return (0, exports.truncateString)(cell, truncates[cellIndex]);
        });
    });
};
exports.truncateTableData = truncateTableData;
//# sourceMappingURL=truncateTableData.js.map