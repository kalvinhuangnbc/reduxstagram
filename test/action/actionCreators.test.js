import expect from 'expect';

// setup
import * as actions from '../../client/actions/actionCreators';
// import * as types from '../../client/actions/actionCreator';

describe('actions::actionCreator', () => {

  describe('#increment', () => {
    it('increments like count', () => {
      const index = 123;
      expect(actions.increment(index)).toEqual({
        type: 'INCREMENT_LIKES',
        index: index
      });
    });
  });

  describe('#addComment', () => {
    it('adds comment to post', () => {
      const postId = 123;
      const author = "Kalvin";
      const comment = "this is a comment"
      expect(actions.addComment(postId, author, comment)).toEqual({
        type: 'ADD_COMMENT',
        postId: postId,
        author: author,
        comment: comment
      });
    });
  });

  describe('#removeComment', () => {
    it('removes comment from post', () => {
      const postId = 123;
      const i = "some i";
      expect(actions.removeComment(postId, i)).toEqual({
        type: 'REMOVE_COMMENT',
        i: i,
        postId: postId
      });
    });
  });

});
