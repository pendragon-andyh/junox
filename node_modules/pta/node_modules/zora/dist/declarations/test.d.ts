import { Test } from './interfaces';
export declare const tester: (description: any, spec: any, { offset, skip, runOnly }?: Readonly<{
    offset: number;
    skip: boolean;
    runOnly: boolean;
}>) => Test;
