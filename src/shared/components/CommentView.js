import React from 'react';
import { State } from 'react-router';
import Immutable from 'immutable';
import marked from 'marked'

let CommentView = React.createClass({



  render() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }

});

export default CommentView;
