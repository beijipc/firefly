/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Home from 'components/home';

describe('HomeComponent', function () {

  beforeEach(function () {
    this.HomeComponent = createComponent(Home);
  });

  it('should have its component name as default className', function () {
    expect(this.HomeComponent.props.className).to.equal('home-page');
  });
});
