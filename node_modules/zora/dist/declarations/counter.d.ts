import { Counter, TestCounter } from './interfaces';
export declare const delegateToCounter: (counter: Counter) => <T>(target: T) => T & Counter;
export declare const counter: () => TestCounter;
