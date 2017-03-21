import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';


import Main from '../../client/components/Main';

// var TestUtils = React.addons.TestUtils;

describe('components', () => {
  describe('Main', () => {
    //   debugger;

    const mainStatusProps = {
      children: "children"
    };

    it('is here?', () => {
      console.log("Hello World");
      console.log(mainStatusProps);
      var main = TestUtils.renderIntoDocument(
        <Main />
      );

      expect(main).toExist();
      // assert(this.inputElement.getAttribute('to') === '/');
    });
  
    // it('should render Reduxstagram title', () => {

    // });
  });
});


// function setup() {
//   // const props = {
//   //   addTodo: jest.fn()
//   // }

//   const enzymeWrapper = shallow(<Main {...props} />)

//   return {
//     props,
//     enzymeWrapper
//   }
// }

// describe('components', () => {
//   describe('Main', () => {
//     it('should render Reduxstagram title', () => {
//       const { enzymeWrapper } = setup()

//       expect(enzymeWrapper.find('Link').text()).toBe('Reduxstagram')
//     });
//   });
// });
