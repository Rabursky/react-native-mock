/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
import React from 'react';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return React.createClass({
    displayName: viewName,
    render() {
      const { children, ...props } = this.props;
      return React.createElement(viewName, props, children);
    },
  });
}

module.exports = requireNativeComponent;
