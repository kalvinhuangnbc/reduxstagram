import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';

var myComments = require('../../client/components/Comments');

describe('components', () => {
  describe('comments', () => {
    it('using shallow', () => {

      const test = shallow(<myComments>Hi</myComments>);

      expect(test.text()).toEqual("Hi");

    });
 
    it('using mount', () => {

      // const commentProps = {
      //   postComments: ["a", "b"]
      // };

console.log("FUCK THIS");
      const test = shallow(<myComments />);
console.log(test);
console.log("FUCK THIS");
      expect(test.contains(<input type="test" ref="comment" placeholder="comment"/>
)).to.equal(true);
      // var myComponent = TestUtils.renderIntoDocument(<myComments/>);
      // var renderedDOM = () => React.findDOMNode(myComponent);
      
    });
  });
});
