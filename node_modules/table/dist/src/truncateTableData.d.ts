import type { Row } from './types/internal';
/**
 * Truncates the input to the given number of characters, the omission included. Characters are counted
 * as they are displayed: ANSI escape codes do not count, and an emoji or a letter with its accents
 * counts once.
 */
export declare const truncateString: (input: string, length: number) => string;
export declare const truncateTableData: (rows: Row[], truncates: number[]) => Row[];
