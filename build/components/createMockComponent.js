var _react=require('react');var _react2=_interopRequireDefault(_react);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

function createMockComponent(displayName){
return _react2['default'].createClass({
displayName:displayName,
mixins:[_NativeMethodsMixin2['default']],
render:function(){function render(){var _props=
this.props,children=_props.children,props=_objectWithoutProperties(_props,['children']);
return _react2['default'].createElement(displayName,props,children);
}return render;}()});

}

module.exports=createMockComponent;