import { AssertionResult } from 'zora';
import { Output } from './output-stream';
export interface Failure {
    path: string;
    data: AssertionResult;
}
export interface Test extends Iterable<Failure> {
    incrementSuccess(): void;
    incrementFailure(): void;
    incrementSkip(): void;
    writeLine(): void;
    goIn(path: string): void;
    goOut(path: string): void;
    addFailure(failure: Failure): void;
    readonly success: number;
    readonly failure: number;
    readonly skip: number;
}
export declare const test: (file: string, out: Output) => any;
