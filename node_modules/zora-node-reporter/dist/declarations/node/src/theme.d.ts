import kleur from 'kleur';
declare type primitive = string | boolean | number;
export interface Theme {
    emphasis(message: primitive): string;
    successBadge(message: primitive): string;
    failureBadge(message: primitive): string;
    skipBadge(message: primitive): string;
    path(message: primitive): string;
    operator(operator: primitive): string;
    adornment(symbol: primitive): string;
    stackTrace(stack: primitive): string;
    summaryPass(count: number): string;
    summarySkip(count: number): string;
    summaryFail(count: number): string;
    error(value: primitive): string;
    success(value: primitive): string;
    diffSame(val: primitive): string;
    diffRemove(val: primitive): string;
    diffAdd(val: primitive): string;
}
export declare const theme: ({ bgGreen, bgRed, bgYellow, green, red, cyan, gray, yellow, bold, underline }?: kleur.Kleur) => Theme;
export declare const paint: Theme;
export {};
