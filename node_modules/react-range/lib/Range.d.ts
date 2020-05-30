import * as React from 'react';
import { IProps, Direction } from './types';
declare class Range extends React.Component<IProps> {
    static defaultProps: {
        step: number;
        direction: Direction;
        rtl: boolean;
        disabled: boolean;
        allowOverlap: boolean;
        min: number;
        max: number;
    };
    trackRef: React.RefObject<HTMLElement>;
    thumbRefs: React.RefObject<HTMLElement>[];
    schdOnMouseMove: (e: MouseEvent) => void;
    schdOnTouchMove: (e: TouchEvent) => void;
    schdOnEnd: (e: Event) => void;
    schdOnWindowResize: () => void;
    state: {
        draggedThumbIndex: number;
        thumbZIndexes: number[];
        isChanged: boolean;
    };
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps): void;
    componentWillUnmount(): void;
    getOffsets: () => {
        x: number;
        y: number;
    }[];
    getThumbs: () => Element[];
    getTargetIndex: (e: Event) => number;
    addTouchEvents: (e: TouchEvent) => void;
    addMouseEvents: (e: MouseEvent) => void;
    onMouseDownTrack: (e: React.MouseEvent<Element, MouseEvent>) => void;
    onWindowResize: () => void;
    onTouchStartTrack: (e: React.TouchEvent<Element>) => void;
    onMouseOrTouchStart: (e: MouseEvent & TouchEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onKeyDown: (e: React.KeyboardEvent<Element>) => void;
    onKeyUp: (e: React.KeyboardEvent<Element>) => void;
    onMove: (clientX: number, clientY: number) => null | undefined;
    normalizeValue: (value: number, index: number) => number;
    onEnd: (e: Event) => void;
    fireOnFinalChange: () => void;
    render(): React.ReactNode;
}
export default Range;
