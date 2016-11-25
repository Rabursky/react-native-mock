
import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableNativeFeedback = React.createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: React.PropTypes.object
  },
  statics: {
    SelectableBackground() {},
    SelectableBackgroundBorderless() {},
    Ripple(color, borderless) {}
  },
  render() {
    const { children, ...props } = this.props;
    return React.createElement('TouchableWNativeFeedback', props, children);
  }
});

module.exports = TouchableNativeFeedback;
