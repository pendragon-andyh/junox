/// <reference types="node" />
import { Direction, WriteStream } from 'tty';
import { Theme } from './theme';
interface TTY {
    clearLine(dir: Direction, callback?: () => void): boolean;
    cursorTo(x: number, y?: number, callback?: () => void): boolean;
    cursorTo(x: number, callback: () => void): boolean;
    moveCursor(dx: number, dy: number, callback?: () => void): boolean;
    write(str: string): void;
    width: number;
}
export declare const delegate: <T, K extends keyof T>(...methods: K[]) => (target: T) => Pick<T, K>;
export interface Output extends TTY, Theme {
    writeLine(message: string, padding?: number): void;
    writeBlock(message: string, padding?: number): void;
}
export declare const output: (stream: WriteStream) => Output;
export {};
