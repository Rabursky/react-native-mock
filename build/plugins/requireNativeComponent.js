


var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */function requireNativeComponent(viewName,componentInterface,extraConfig){
return _react2['default'].createClass({
displayName:viewName,
render:function(){function render(){var _props=
this.props,children=_props.children,props=_objectWithoutProperties(_props,['children']);
return _react2['default'].createElement(viewName,props,children);
}return render;}()});

}

module.exports=requireNativeComponent;