/** @jsx React.DOM */

jest.dontMock('../Button');
describe('Button', function() {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Button = require('../Button'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Button effect>Stuff</Button>);
  });

  it('should output a button', function() {
    expect(instance.getDOMNode().nodeName).toBe('BUTTON');
  });

  it('should output a component with btn class', function() {
    expect(instance.getDOMNode().className).toContain('btn');
  });

  it('should apply effects', function() {
    expect(instance.getDOMNode().className).toContain('waves-effect');
    expect(instance.getDOMNode().className).toContain('waves-light');
  });

});