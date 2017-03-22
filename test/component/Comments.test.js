import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect'
import {mount, shallow} from 'enzyme';
import jsdom from 'jsdom'
import myComments from '../../client/components/Comments';
// var myComments = require('../../client/components/Comments');

describe('components', () => {
  describe('comments', () => {
    it('using shallow', () => {

      const test = shallow(<div>Hi</div>);

      expect(test.text()).toEqual("Hi");

    });
 
    it('using mount', () => {
// console.log(myComments);
console.log("FUCK THIS");
      const test = shallow(<myComments />);


      var test2 = TestUtils.renderIntoDocument(
        <myComments />
      );



console.log(test2);
console.log("FUCK THIS");
      expect(test.contains(<input type="test" ref="comment" placeholder="comment"/>
)).toEqual(true);
      // var myComponent = TestUtils.renderIntoDocument(<myComments/>);
      // var renderedDOM = () => React.findDOMNode(myComponent);
      
    });
  });
});
