import { Message } from './interfaces';
export declare const defaultTestOptions: Readonly<{
    offset: number;
    skip: boolean;
    runOnly: boolean;
}>;
export declare const noop: () => void;
export declare const TesterPrototype: {
    [Symbol.asyncIterator]: () => AsyncGenerator<any, any, any>;
};
export declare const testerLikeProvider: (BaseProto?: {
    [Symbol.asyncIterator]: () => AsyncGenerator<any, any, any>;
}) => (assertions: any[], routine: Promise<any>, offset: number) => any;
export declare const testerFactory: (assertions: any[], routine: Promise<any>, offset: number) => any;
export declare const map: (fn: any) => (stream: AsyncIterable<Message<any>>) => AsyncGenerator<any, void, unknown>;
