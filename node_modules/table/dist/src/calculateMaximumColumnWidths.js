"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMaximumColumnWidths = exports.calculateMaximumCellWidth = void 0;
const utils_1 = require("./utils");
const calculateMaximumCellWidth = (cell) => {
    return Math.max(...cell.split('\n').map(utils_1.stringWidth));
};
exports.calculateMaximumCellWidth = calculateMaximumCellWidth;
/**
 * Produces an array of values that describe the largest value length (width) in every column.
 */
const calculateMaximumColumnWidths = (rows, spanningCellConfigs = []) => {
    const columnWidths = new Array(rows[0].length).fill(0);
    const rangeCoordinates = spanningCellConfigs.map(utils_1.calculateRangeCoordinate);
    rows.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const range = rangeCoordinates.find((rangeCoordinate) => {
                return (0, utils_1.isCellInRange)({ col: cellIndex,
                    row: rowIndex }, rangeCoordinate);
            });
            if (range && (range.topLeft.col !== range.bottomRight.col || range.topLeft.row !== rowIndex)) {
                return;
            }
            columnWidths[cellIndex] = Math.max(columnWidths[cellIndex], (0, exports.calculateMaximumCellWidth)(cell));
        });
    });
    return columnWidths;
};
exports.calculateMaximumColumnWidths = calculateMaximumColumnWidths;
//# sourceMappingURL=calculateMaximumColumnWidths.js.map