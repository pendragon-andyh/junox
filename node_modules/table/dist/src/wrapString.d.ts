/**
 * Creates an array of strings split into groups of at most size terminal columns.
 *
 * wrapText is different from would-be "chunk" implementation
 * in that whitespace characters that occur on a chunk size limit are trimmed.
 *
 */
export declare const wrapString: (subject: string, size: number) => string[];
