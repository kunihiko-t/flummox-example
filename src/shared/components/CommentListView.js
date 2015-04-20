import React from 'react';
import { State } from 'react-router';
import Immutable from 'immutable';
import Comment from './CommentView';

let CommentListView = React.createClass({


  render() {

    console.log("render list");
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }



});

export default CommentListView;
