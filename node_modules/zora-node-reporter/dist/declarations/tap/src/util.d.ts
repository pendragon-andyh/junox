import { AssertionResult, Message, Test } from 'zora';
export declare const map: (fn: Function) => (stream: AsyncIterable<Message<any>>) => AsyncGenerator<any, void, unknown>;
export declare const flatten: (stream: AsyncIterable<Message<any>>) => AsyncGenerator<any, void, unknown>;
export declare const isAssertionResult: (result: AssertionResult | Test) => result is AssertionResult;
export declare const stringifySymbol: (key: string, value: Symbol) => string | Symbol;
