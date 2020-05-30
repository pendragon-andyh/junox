"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var utils_1 = require("./utils");
var types_1 = require("./types");
var INCREASE_KEYS = ['ArrowRight', 'ArrowUp', 'k', 'PageUp'];
var DECREASE_KEYS = ['ArrowLeft', 'ArrowDown', 'j', 'PageDown'];
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range(props) {
        var _this = _super.call(this, props) || this;
        _this.trackRef = React.createRef();
        _this.thumbRefs = [];
        _this.state = {
            draggedThumbIndex: -1,
            thumbZIndexes: new Array(_this.props.values.length).fill(0).map(function (t, i) { return i; }),
            isChanged: false
        };
        _this.getOffsets = function () {
            var _a = _this.props, direction = _a.direction, values = _a.values, min = _a.min, max = _a.max;
            var trackElement = _this.trackRef.current;
            var trackRect = trackElement.getBoundingClientRect();
            var trackPadding = utils_1.getPaddingAndBorder(trackElement);
            return _this.getThumbs().map(function (thumb, index) {
                var thumbOffsets = { x: 0, y: 0 };
                var thumbRect = thumb.getBoundingClientRect();
                var thumbMargins = utils_1.getMargin(thumb);
                switch (direction) {
                    case types_1.Direction.Right:
                        thumbOffsets.x = (thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y =
                            ((thumbRect.height - trackRect.height) / 2 + trackPadding.top) * -1;
                        thumbOffsets.x +=
                            trackRect.width * utils_1.relativeValue(values[index], min, max) -
                                thumbRect.width / 2;
                        return thumbOffsets;
                    case types_1.Direction.Left:
                        thumbOffsets.x = (thumbMargins.right + trackPadding.right) * -1;
                        thumbOffsets.y =
                            ((thumbRect.height - trackRect.height) / 2 + trackPadding.top) * -1;
                        thumbOffsets.x +=
                            trackRect.width -
                                trackRect.width * utils_1.relativeValue(values[index], min, max) -
                                thumbRect.width / 2;
                        return thumbOffsets;
                    case types_1.Direction.Up:
                        thumbOffsets.x =
                            ((thumbRect.width - trackRect.width) / 2 +
                                thumbMargins.left +
                                trackPadding.left) *
                                -1;
                        thumbOffsets.y = -trackPadding.left;
                        thumbOffsets.y +=
                            trackRect.height -
                                trackRect.height * utils_1.relativeValue(values[index], min, max) -
                                thumbRect.height / 2;
                        return thumbOffsets;
                    case types_1.Direction.Down:
                        thumbOffsets.x =
                            ((thumbRect.width - trackRect.width) / 2 +
                                thumbMargins.left +
                                trackPadding.left) *
                                -1;
                        thumbOffsets.y = -trackPadding.left;
                        thumbOffsets.y +=
                            trackRect.height * utils_1.relativeValue(values[index], min, max) -
                                thumbRect.height / 2;
                        return thumbOffsets;
                    default:
                        return utils_1.assertUnreachable(direction);
                }
            });
        };
        _this.getThumbs = function () {
            if (_this.trackRef && _this.trackRef.current) {
                return Array.from(_this.trackRef.current.children);
            }
            console.warn('No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?');
            return [];
        };
        _this.getTargetIndex = function (e) {
            return _this.getThumbs().findIndex(function (child) { return child === e.target || child.contains(e.target); });
        };
        _this.addTouchEvents = function (e) {
            document.addEventListener('touchmove', _this.schdOnTouchMove, {
                passive: false
            });
            document.addEventListener('touchend', _this.schdOnEnd, {
                passive: false
            });
            document.addEventListener('touchcancel', _this.schdOnEnd, {
                passive: false
            });
        };
        _this.addMouseEvents = function (e) {
            document.addEventListener('mousemove', _this.schdOnMouseMove);
            document.addEventListener('mouseup', _this.schdOnEnd);
        };
        _this.onMouseDownTrack = function (e) {
            var _a;
            // in case there is a single thumb, we want to support
            // moving the thumb to a place where the track is clicked
            if (e.button !== 0 || _this.props.values.length > 1)
                return;
            (_a = _this.thumbRefs[0].current) === null || _a === void 0 ? void 0 : _a.focus();
            e.persist();
            e.preventDefault();
            _this.addMouseEvents(e.nativeEvent);
            _this.setState({
                draggedThumbIndex: 0
            }, function () { return _this.onMove(e.clientX, e.clientY); });
        };
        _this.onWindowResize = function () {
            utils_1.translateThumbs(_this.getThumbs(), _this.getOffsets(), _this.props.rtl);
        };
        _this.onTouchStartTrack = function (e) {
            // in case there is a single thumb, we want to support
            // moving the thumb to a place where the track is clicked
            if (_this.props.values.length > 1)
                return;
            e.persist();
            _this.addTouchEvents(e.nativeEvent);
            _this.setState({
                draggedThumbIndex: 0
            }, function () { return _this.onMove(e.touches[0].clientX, e.touches[0].clientY); });
        };
        _this.onMouseOrTouchStart = function (e) {
            if (_this.props.disabled)
                return;
            var isTouch = utils_1.isTouchEvent(e);
            if (!isTouch && e.button !== 0)
                return;
            var index = _this.getTargetIndex(e);
            if (index === -1)
                return;
            if (isTouch) {
                _this.addTouchEvents(e);
            }
            else {
                _this.addMouseEvents(e);
            }
            _this.setState({
                draggedThumbIndex: index,
                thumbZIndexes: _this.state.thumbZIndexes.map(function (t, i) {
                    if (i === index) {
                        return Math.max.apply(Math, _this.state.thumbZIndexes);
                    }
                    return t <= _this.state.thumbZIndexes[index] ? t : t - 1;
                })
            });
        };
        _this.onMouseMove = function (e) {
            e.preventDefault();
            _this.onMove(e.clientX, e.clientY);
        };
        _this.onTouchMove = function (e) {
            e.preventDefault();
            _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
        };
        _this.onKeyDown = function (e) {
            var _a = _this.props, values = _a.values, onChange = _a.onChange, step = _a.step, rtl = _a.rtl;
            var isChanged = _this.state.isChanged;
            var index = _this.getTargetIndex(e.nativeEvent);
            var inverter = rtl ? -1 : 1;
            if (index === -1)
                return;
            if (INCREASE_KEYS.includes(e.key)) {
                e.preventDefault();
                _this.setState({
                    draggedThumbIndex: index,
                    isChanged: true
                });
                onChange(utils_1.replaceAt(values, index, _this.normalizeValue(values[index] + inverter * (e.key === 'PageUp' ? step * 10 : step), index)));
            }
            else if (DECREASE_KEYS.includes(e.key)) {
                e.preventDefault();
                _this.setState({
                    draggedThumbIndex: index,
                    isChanged: true
                });
                onChange(utils_1.replaceAt(values, index, _this.normalizeValue(values[index] -
                    inverter * (e.key === 'PageDown' ? step * 10 : step), index)));
            }
            else if (e.key === 'Tab') {
                _this.setState({ draggedThumbIndex: -1 }, function () {
                    // If key pressed when thumb was moving, fire onFinalChange
                    if (isChanged) {
                        _this.fireOnFinalChange();
                    }
                });
            }
            else {
                if (isChanged) {
                    _this.fireOnFinalChange();
                }
            }
        };
        _this.onKeyUp = function (e) {
            var isChanged = _this.state.isChanged;
            _this.setState({
                draggedThumbIndex: -1
            }, function () {
                if (isChanged) {
                    _this.fireOnFinalChange();
                }
            });
        };
        _this.onMove = function (clientX, clientY) {
            var draggedThumbIndex = _this.state.draggedThumbIndex;
            var _a = _this.props, direction = _a.direction, min = _a.min, max = _a.max, onChange = _a.onChange, values = _a.values, step = _a.step, rtl = _a.rtl;
            if (draggedThumbIndex === -1)
                return null;
            var trackElement = _this.trackRef.current;
            var trackRect = trackElement.getBoundingClientRect();
            var trackLength = utils_1.isVertical(direction)
                ? trackRect.height
                : trackRect.width;
            var newValue = 0;
            switch (direction) {
                case types_1.Direction.Right:
                    newValue =
                        ((clientX - trackRect.left) / trackLength) * (max - min) + min;
                    break;
                case types_1.Direction.Left:
                    newValue =
                        ((trackLength - (clientX - trackRect.left)) / trackLength) *
                            (max - min) +
                            min;
                    break;
                case types_1.Direction.Down:
                    newValue =
                        ((clientY - trackRect.top) / trackLength) * (max - min) + min;
                    break;
                case types_1.Direction.Up:
                    newValue =
                        ((trackLength - (clientY - trackRect.top)) / trackLength) *
                            (max - min) +
                            min;
                    break;
                default:
                    utils_1.assertUnreachable(direction);
            }
            // invert for RTL
            if (rtl) {
                newValue = max + min - newValue;
            }
            if (Math.abs(values[draggedThumbIndex] - newValue) >= step) {
                onChange(utils_1.replaceAt(values, draggedThumbIndex, _this.normalizeValue(newValue, draggedThumbIndex)));
            }
        };
        _this.normalizeValue = function (value, index) {
            var _a = _this.props, min = _a.min, max = _a.max, step = _a.step, allowOverlap = _a.allowOverlap, values = _a.values;
            return utils_1.normalizeValue(value, index, min, max, step, allowOverlap, values);
        };
        _this.onEnd = function (e) {
            e.preventDefault();
            document.removeEventListener('mousemove', _this.schdOnMouseMove);
            document.removeEventListener('touchmove', _this.schdOnTouchMove);
            document.removeEventListener('mouseup', _this.schdOnEnd);
            document.removeEventListener('touchup', _this.schdOnEnd);
            document.removeEventListener('touchcancel', _this.schdOnEnd);
            if (_this.state.draggedThumbIndex === -1)
                return;
            _this.setState({ draggedThumbIndex: -1 }, function () {
                _this.fireOnFinalChange();
            });
        };
        _this.fireOnFinalChange = function () {
            _this.setState({ isChanged: false });
            var _a = _this.props, onFinalChange = _a.onFinalChange, values = _a.values;
            if (onFinalChange) {
                onFinalChange(values);
            }
        };
        _this.schdOnMouseMove = utils_1.schd(_this.onMouseMove);
        _this.schdOnTouchMove = utils_1.schd(_this.onTouchMove);
        _this.schdOnEnd = utils_1.schd(_this.onEnd);
        _this.schdOnWindowResize = utils_1.schd(_this.onWindowResize);
        _this.thumbRefs = props.values.map(function () { return React.createRef(); });
        if (!utils_1.isStepDivisible(props.min, props.max, props.step)) {
            console.warn('The difference of `max` and `min` must be divisible by `step`');
        }
        return _this;
    }
    Range.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, values = _a.values, min = _a.min, step = _a.step;
        window.addEventListener('resize', this.schdOnWindowResize);
        document.addEventListener('touchstart', this.onMouseOrTouchStart, {
            passive: false
        });
        document.addEventListener('mousedown', this.onMouseOrTouchStart, {
            passive: false
        });
        !this.props.allowOverlap && utils_1.checkInitialOverlap(this.props.values);
        this.props.values.forEach(function (value) {
            return utils_1.checkBoundaries(value, _this.props.min, _this.props.max);
        });
        utils_1.translateThumbs(this.getThumbs(), this.getOffsets(), this.props.rtl);
        values.forEach(function (value) {
            if (!utils_1.isStepDivisible(min, value, step)) {
                console.warn('The `values` property is in conflict with the current `step`, `min` and `max` properties. Please provide values that are accessible using the min, max an step values');
            }
        });
    };
    Range.prototype.componentDidUpdate = function (prevProps) {
        utils_1.translateThumbs(this.getThumbs(), this.getOffsets(), this.props.rtl);
    };
    Range.prototype.componentWillUnmount = function () {
        var options = {
            passive: false
        };
        window.removeEventListener('resize', this.schdOnWindowResize);
        document.removeEventListener('mousedown', this.onMouseOrTouchStart, options);
        document.removeEventListener('touchstart', this.onMouseOrTouchStart);
        document.removeEventListener('touchend', this.schdOnEnd);
    };
    Range.prototype.render = function () {
        var _this = this;
        var _a = this.props, renderTrack = _a.renderTrack, renderThumb = _a.renderThumb, values = _a.values, min = _a.min, max = _a.max, allowOverlap = _a.allowOverlap, disabled = _a.disabled;
        var _b = this.state, draggedThumbIndex = _b.draggedThumbIndex, thumbZIndexes = _b.thumbZIndexes;
        return renderTrack({
            props: {
                style: {
                    // creates stacking context that prevents z-index applied to thumbs
                    // interfere with other elements
                    transform: 'scale(1)',
                    cursor: draggedThumbIndex > -1
                        ? 'grabbing'
                        : values.length === 1 && !disabled
                            ? 'pointer'
                            : 'inherit'
                },
                onMouseDown: disabled ? utils_1.voidFn : this.onMouseDownTrack,
                onTouchStart: disabled ? utils_1.voidFn : this.onTouchStartTrack,
                ref: this.trackRef
            },
            isDragged: this.state.draggedThumbIndex > -1,
            disabled: disabled,
            children: values.map(function (value, index) {
                var isDragged = _this.state.draggedThumbIndex === index;
                return renderThumb({
                    index: index,
                    value: value,
                    isDragged: isDragged,
                    props: {
                        style: {
                            position: 'absolute',
                            zIndex: thumbZIndexes[index],
                            cursor: disabled ? 'inherit' : isDragged ? 'grabbing' : 'grab',
                            userSelect: 'none',
                            touchAction: 'none',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none'
                        },
                        key: index,
                        tabIndex: disabled ? undefined : 0,
                        'aria-valuemax': allowOverlap ? max : values[index + 1] || max,
                        'aria-valuemin': allowOverlap ? min : values[index - 1] || min,
                        'aria-valuenow': value,
                        draggable: false,
                        ref: _this.thumbRefs[index],
                        role: 'slider',
                        onKeyDown: disabled ? utils_1.voidFn : _this.onKeyDown,
                        onKeyUp: disabled ? utils_1.voidFn : _this.onKeyUp
                    }
                });
            })
        });
    };
    Range.defaultProps = {
        step: 1,
        direction: types_1.Direction.Right,
        rtl: false,
        disabled: false,
        allowOverlap: false,
        min: 0,
        max: 100
    };
    return Range;
}(React.Component));
exports.default = Range;
