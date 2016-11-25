import React from 'react';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    mixins: [NativeMethodsMixin],
    render() {
      const { children, ...props } = this.props;
      return React.createElement(displayName, props, children);
    },
  });
}

module.exports = createMockComponent;
