import { AssertionMessage, AssertionResult, BailoutMessage, StartTestMessage, Test, TestEndMessage } from './interfaces';
export declare const startTestMessage: (test: {
    description: any;
}, offset: number) => StartTestMessage;
export declare const assertionMessage: (assertion: AssertionResult | Test, offset: number) => AssertionMessage;
export declare const endTestMessage: (test: Test, offset: number) => TestEndMessage;
export declare const bailout: (error: Error, offset: number) => BailoutMessage;
