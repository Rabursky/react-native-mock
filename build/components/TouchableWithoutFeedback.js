var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _EdgeInsetsPropType=require('../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableWithoutFeedback.js
 */var TouchableWithoutFeedback=_react2['default'].createClass({displayName:'TouchableWithoutFeedback',
propTypes:{
accessible:_react2['default'].PropTypes.bool,
accessibilityComponentType:_react2['default'].PropTypes.oneOf(_View2['default'].AccessibilityComponentType),
accessibilityTraits:_react2['default'].PropTypes.oneOfType([
_react2['default'].PropTypes.oneOf(_View2['default'].AccessibilityTraits),
_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(_View2['default'].AccessibilityTraits))]),

/**
     * If true, disable all interactions for this component.
     */
disabled:_react2['default'].PropTypes.bool,
/**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll
     * that steals the responder lock).
     */
onPress:_react2['default'].PropTypes.func,
onPressIn:_react2['default'].PropTypes.func,
onPressOut:_react2['default'].PropTypes.func,
/**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
onLayout:_react2['default'].PropTypes.func,

onLongPress:_react2['default'].PropTypes.func,

/**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
delayPressIn:_react2['default'].PropTypes.number,
/**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
delayPressOut:_react2['default'].PropTypes.number,
/**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
delayLongPress:_react2['default'].PropTypes.number,
/**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
pressRetentionOffset:_EdgeInsetsPropType2['default'],
/**
     * This defines how far your touch can start away from the button. This is
     * added to `pressRetentionOffset` when moving off of the button.
     * ** NOTE **
     * The touch area never extends past the parent view bounds and the Z-index
     * of sibling views always takes precedence if a touch hits two overlapping
     * views.
     */
hitSlop:_EdgeInsetsPropType2['default']},

render:function(){function render(){var _props=
this.props,children=_props.children,onPress=_props.onPress,activeOpacity=_props.activeOpacity,props=_objectWithoutProperties(_props,['children','onPress','activeOpacity']);
return _react2['default'].createElement('input',_extends({onClick:onPress,type:"button"},props),null);
}return render;}()});


module.exports=TouchableWithoutFeedback;