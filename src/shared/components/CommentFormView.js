import React from 'react';
import { State } from 'react-router';
import Immutable from 'immutable';


let CommentFormView = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }

    let commentActions = this.props.flux.getActions('comments');
    commentActions.postComment(author,text);

    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  },

  render() {

    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  },

});

export default CommentFormView;
