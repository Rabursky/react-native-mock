var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _TouchableWithoutFeedback=require('./TouchableWithoutFeedback');var _TouchableWithoutFeedback2=_interopRequireDefault(_TouchableWithoutFeedback);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var TouchableOpacity=_react2['default'].createClass({displayName:'TouchableOpacity',
propTypes:_extends({},
_TouchableWithoutFeedback2['default'].propTypes,{

/**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
activeOpacity:_react2['default'].PropTypes.number}),


render:function(){function render(){var _props=
this.props,children=_props.children,activeOpacity=_props.activeOpacity,props=_objectWithoutProperties(_props,['children','activeOpacity']);
return _react2['default'].cloneElement(_TouchableWithoutFeedback2['default'],props,children);
}return render;}()});


module.exports=_TouchableWithoutFeedback2['default'];